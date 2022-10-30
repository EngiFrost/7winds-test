import { TableCell } from '@mui/material';
import { FC, useEffect } from 'react';
import { RowData } from '../../model/row';
import { Input } from './Input';

type RowFormProps = {
  row: RowData;
};

export const RowForm: FC<RowFormProps> = ({ row }) => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        console.log('Enter key was pressed. Run your function.');
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <form>
      <TableCell>
        <Input name="title" value={row.unit} placeholder="Наименование..." />
      </TableCell>
      {row.type === 'row' ? (
        <>
          <TableCell>
            <Input name="unit" value={row.unit} placeholder="Единицы измерения..." />
          </TableCell>
          <TableCell>
            <Input name="quantity" value={`${row.quantity}`} placeholder="Количество..." />
          </TableCell>
          <TableCell>
            <Input name="unitPrice" value={`${row.unitPrice}`} placeholder="Цена за единицу..." />
          </TableCell>
        </>
      ) : (
        <>
          <TableCell />
          <TableCell />
          <TableCell />
        </>
      )}
    </form>
  );
};
