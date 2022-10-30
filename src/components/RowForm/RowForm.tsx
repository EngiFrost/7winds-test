import { TableCell } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { RowData } from '../../model/row';
import { tableStore } from '../../store/TableStore';
import { Input } from './Input';

type RowFormProps = {
  row: RowData;
};

export const RowForm: FC<RowFormProps> = observer(({ row }) => {
  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      // FIXME: make submitter
      console.log('submitted!');
      tableStore.editing = null; // FIXME: make getter
    }
  };

  return (
    <>
      <TableCell>
        <Input name="title" value={row.unit} placeholder="Наименование..." handleSubmit={handleSubmit} />
      </TableCell>

      {row.type === 'row' ? (
        <>
          <TableCell>
            <Input name="unit" value={row.unit} placeholder="Единицы измерения..." handleSubmit={handleSubmit} />
          </TableCell>
          <TableCell>
            <Input name="quantity" value={`${row.quantity}`} placeholder="Количество..." handleSubmit={handleSubmit} />
          </TableCell>
          <TableCell>
            <Input name="unitPrice" value={`${row.unitPrice}`} placeholder="Цена за единицу..." handleSubmit={handleSubmit} />
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
