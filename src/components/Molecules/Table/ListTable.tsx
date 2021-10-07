import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import styles from '../../styles/ListTable.module.scss';
import { PathLink } from '../../Atoms/Link';
import { ListTableProps } from '../../types/Table/props';

const ListTable: React.FC<ListTableProps> = ({ heads, data }) => {
  return (
    <TableContainer component={Paper}>
      <Table className={styles.root} aria-label="owner list">
        <TableHead>
          <TableRow>
            {heads.map((head) => (
              <TableCell key={head} align="right">
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className={styles.body}>
          {data.map((owner) => (
            <TableRow key={owner.path_name}>
              <TableCell component="th" scope="row">
                <PathLink label={owner.store_name} href={`/menu/edit?oid=${owner.oid}`} />
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
