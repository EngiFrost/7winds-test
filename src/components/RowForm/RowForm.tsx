import { TableCell } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { FC, useState } from 'react';
import { RowData } from '../../model/row';
import { tableStore } from '../../store/TableStore';

import * as S from './styles';

type RowFormProps = {
  row: RowData;
};

export const RowForm: FC<RowFormProps> = observer(({ row }) => {
  const [title, setTitle] = useState<string>(row.title);
  const [unit, setUnit] = useState<string>(row.unit);
  const [quantity, setQuantity] = useState<number>(row.quantity);
  const [unitPrice, setUnitPrice] = useState<number>(row.unitPrice);

  const submit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      tableStore.editRow({
        ...row,
        title,
        unit,
        quantity,
        unitPrice,
        price: unitPrice * quantity
      });
      tableStore.setEditing(null);
    }
  };

  return (
    <>
      <TableCell>
        <S.InputField 
        name="title" 
        value={title} 
        placeholder="Наименование..." 
        onKeyDown={submit}
        onChange={(e) => setTitle(e.target.value)} 
      />
      </TableCell>

      {row.type === 'row' ? (
        <>
          <TableCell>
            <S.InputField 
            name="unit" 
            value={unit} 
            placeholder="Единицы измерения..." 
            onKeyDown={submit}
            onChange={(e) => setUnit(e.target.value)} 
          />
          </TableCell>

          <TableCell>
            <S.InputField 
            name="quantity" 
            value={`${quantity}`} 
            placeholder="Количество..." 
            onKeyDown={submit}
            onChange={(e) => setQuantity(+e.target.value || 0)} 
          />
          </TableCell>

          <TableCell>
            <S.InputField 
            name="unitPrice" 
            value={`${unitPrice}`} 
            placeholder="Цена за единицу..." 
            onKeyDown={submit}
            onChange={(e) => setUnitPrice(+e.target.value || 0)} 
          />
          </TableCell>
        </>
      ) : (
        <>
          <TableCell />
          <TableCell />
          <TableCell />
        </>
      )}
    </>
  );
});
