import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { PathLink } from '../Link';
import { ListTableProps } from '../types/table';
import styles from './ListTable.module.scss';

const ListTable: React.FC<ListTableProps> = ({ heads, data }) => {
  return (
    <TableContainer component={Paper}>
      <Table className={styles['ListTable-root']} aria-label="owner list">
        <TableHead>
          <TableRow>
            {heads.map((head) => (
              <TableCell key={head} align="right">
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className="overflow-scroll">
          {data.map((owner) => (
            <TableRow key={owner.path_name}>
              <TableCell component="th" scope="row">
                <PathLink label={owner.store_name} path={`/menu/edit?oid=${owner.oid}`} />
              </TableCell>
              <TableCell align="right">{owner.email}</TableCell>
              <TableCell align="right">{owner.representative}</TableCell>
              <TableCell align="right">{owner.phone}</TableCell>
              <TableCell align="right">{owner.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListTable;
