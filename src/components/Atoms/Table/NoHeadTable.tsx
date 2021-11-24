import { NoHeadTableProps } from '.';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import styles from './NoHeadTable.module.scss';

const NoHeadTable: React.FC<NoHeadTableProps> = ({ rows }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="confirm table">
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.label}>
                <TableCell className={styles['left-cell']} align="left" component="th">
                  {row.label}
                </TableCell>
                <TableCell align="left">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default NoHeadTable;
