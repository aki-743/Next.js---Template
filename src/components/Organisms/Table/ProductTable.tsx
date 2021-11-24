import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { AsyncError } from '../../Atoms/Error';
import { AsyncLoading } from '../../Atoms/Loading';
import { ProductTableProps } from '../../Atoms/Table';

const heads = ['商品名', '値段', '契約人数', '販売状況'];

const ProductTable = ({ data, isLoading, isError }: ProductTableProps) => {
  return (
    <TableContainer>
      <Table aria-label="product list">
        <TableHead>
          <TableRow key="head">
            {heads.map((head) => (
              <TableCell key={head} align="right">
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((product) => (
            <TableRow key={product.path_name}>
              <TableCell align="right">{product.name}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.contract_number}</TableCell>
              <TableCell align="right">{product.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isLoading && <AsyncLoading />}
      {isError && <AsyncError />}
    </TableContainer>
  );
};

export default ProductTable;
