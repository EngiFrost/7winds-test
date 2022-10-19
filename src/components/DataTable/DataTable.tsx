import { FC } from 'react';
import { Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { RowData } from '../../model/row';

import * as S from './styles';
import { Level } from '../Level/Level';

const rows: RowData[] = [
  {
    id: 1,
    title: 'Test title 1',
    unit: 'Litres',
    quantity: 1234,
    unitPrice: 22323,
    price: 123425,
    parent: null,
    type: 'level',
  },
  {
    id: 2,
    title: 'Test title 2',
    unit: 'Adasd',
    quantity: 232,
    unitPrice: 1,
    price: 1232123,
    parent: 1,
    type: 'row',
  },
  {
    id: 3,
    title: 'Test title 3',
    unit: 'Aaaaa',
    quantity: 1,
    unitPrice: 2,
    price: 3,
    parent: 1,
    type: 'row',
  },
];

export const DataTable: FC = () => {
  return (
    <S.Wrapper>
      <Table sx={{ minWidth: 800, backgroundColor: '#202124', borderCollapse: 'unset' }}>
        <TableHead sx={{ maxHeight: 42 }}>
          <TableRow>
            <TableCell width={86}>
              <Typography variant="h3">Уровень</Typography>
            </TableCell>
            <TableCell sx={{ minWidth: 176 }}>
              <Typography variant="h3">Наименование работ</Typography>
            </TableCell>
            <TableCell width={176}>
              <Typography variant="h3">Ед. изм.</Typography>
            </TableCell>
            <TableCell width={176}>
              <Typography variant="h3">Количество</Typography>
            </TableCell>
            <TableCell width={176}>
              <Typography variant="h3">Цена за ед.</Typography>
            </TableCell>
            <TableCell width={176}>
              <Typography variant="h3">Стоимость</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                <Level />
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.unit}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.unitPrice}</TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </S.Wrapper>
  );
};
