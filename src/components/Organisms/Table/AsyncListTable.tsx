import styles from '../../styles/ListTable.module.scss';
import { AsyncError } from '../../Atoms/Error';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { PathLink } from '../../Atoms/Link';
import { AsyncLoading } from '../../Atoms/Loading';
import { AsyncListTableProps } from '../../Atoms/Table';

const AsyncListTable: React.FC<AsyncListTableProps> = ({ heads, data, isLoading, isError }) => {
  return (
    <TableContainer component={Paper}>
      <Table className={styles['comp-root']} aria-label="owner list">
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
          {Array.isArray(data) &&
            !isLoading &&
            !isError &&
            data.map((owner) => (
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
      {isLoading && <AsyncLoading />}
      {isError && <AsyncError />}
    </TableContainer>
  );
};

export default AsyncListTable;
