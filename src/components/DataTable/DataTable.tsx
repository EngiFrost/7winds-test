import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Level } from '../Level/Level';
import { tableStore } from '../../store/TableStore';
import { RowForm } from '../RowForm/RowForm';

import * as S from './styles';

export const DataTable: FC = observer(() => {
  return (
    <S.Wrapper>
      <Table sx={{ backgroundColor: '#202124', borderCollapse: 'unset' }}>
        <TableHead sx={{ maxHeight: 42 }}>
          <TableRow>
            <TableCell width={110} sx={{ minWidth: '110px' }}>
              <Typography variant="h3">Уровень</Typography>
            </TableCell>
            <TableCell sx={{ minWidth: '200px' }}>
              <Typography variant="h3">Наименование работ</Typography>
            </TableCell>
            <TableCell width={176} sx={{ minWidth: '200px' }}>
              <Typography variant="h3">Ед. изм.</Typography>
            </TableCell>
            <TableCell width={176} sx={{ minWidth: '200px' }}>
              <Typography variant="h3">Количество</Typography>
            </TableCell>
            <TableCell width={176} sx={{ minWidth: '200px' }}>
              <Typography variant="h3">Цена за ед.</Typography>
            </TableCell>
            <TableCell width={176} sx={{ minWidth: '200px' }}>
              <Typography variant="h3">Стоимость</Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableStore.rows.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                <Level id={row.id} parent={row.parent} type={row.type} />
              </TableCell>
              {tableStore.editing === row.id ? (
                <RowForm row={row} />
              ) : (
                <>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.type === 'row' ? row.unit : ''}</TableCell>
                  <TableCell>{row.type === 'row' ? row.quantity : ''}</TableCell>
                  <TableCell>{row.type === 'row' ? row.unitPrice : ''}</TableCell>
                </>
              )}
              <TableCell>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </S.Wrapper>
  );
});
