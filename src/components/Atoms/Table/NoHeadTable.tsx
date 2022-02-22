import { NoHeadTableProps } from '.';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { forwardRef } from 'react';

const NoHeadTable = forwardRef<HTMLDivElement, NoHeadTableProps>(function render({ id, className, rows }, ref) {
  return (
    <TableContainer id={id} className={className} component={Paper} ref={ref}>
      <Table aria-label="confirm table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.label}>
              <TableCell className="w-1/2 font-bold text-white bg-main" align="left" component="th">
                {row.label}
              </TableCell>
              <TableCell align="left">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default NoHeadTable;
