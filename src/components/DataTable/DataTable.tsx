import { FC } from 'react';
import { Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { RowData } from './entity';

import * as S from './styles';

const rows: RowData[] = [];

export const DataTable: FC = () => {
  return (
    <S.Wrapper>
      <Table sx={{ minWidth: 800, backgroundColor: '#202124', borderCollapse: 'unset' }}>
        <TableHead sx={{ maxHeight: 42 }}>
          <TableRow>
            {/* TODO: make them styled! */}
            <TableCell width={86}>
              <Typography variant="h3">Уровень</Typography>
            </TableCell>
            <TableCell sx={{minWidth: 176}}>
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
              <TableCell scope="row">{row.title}</TableCell>
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
