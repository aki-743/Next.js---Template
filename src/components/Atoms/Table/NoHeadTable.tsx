import { useCallback, useState } from 'react';
import { NoHeadTableProps } from '../../types/Table/props';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';

/** キーに対するラベル名 */
const keyLabels = {
  show_password: 'ログインパスワード',
  store_name: '店名',
  oid: 'オーナーID・ログインID',
  email: 'メールアドレス',
  representative: '代表者氏名',
  phone: '電話番号',
  address: '住所',
  path_name: 'パス名',
};

/** マスクで表示させたいキー名 */
const maskKeys = [];

const ConfirmTable: React.FC<NoHeadTableProps> = ({ rows }) => {
  const [maskStates, setMaskStates] = useState<Array<boolean>>(new Array(maskKeys.length).fill(false));

  const toggleMaskState = (index: number) => () => {
    const newMaskStates = [...maskStates];
    newMaskStates[index] = !newMaskStates[index];
    setMaskStates(newMaskStates);
  };

  const CustomTableCell = useCallback(
    (key: string) => {
      const isMasked = maskKeys.includes(key);
      const index = maskKeys.findIndex((maskKey) => maskKey === key);

      return (
        <TableCell align="left">
          {isMasked ? (
            maskStates[index] ? (
              <div className="flex justify-between">
                <span>{rows[key]}</span>
                <a className="GB-link" onClick={toggleMaskState(index)}>
                  非表示
                </a>
              </div>
            ) : (
              <div className="flex justify-between">
                <span>***********</span>
                <a className="GB-link" onClick={toggleMaskState(index)}>
                  表示
                </a>
              </div>
            )
          ) : (
            rows[key]
          )}
        </TableCell>
      );
    },
    [maskStates],
  );

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="confirm table">
          <TableBody>
            {Object.keys(rows).map(
              (key) =>
                keyLabels[key] && (
                  <TableRow key={key}>
                    <TableCell className="bg-gray-100 w-[40%]" align="left" component="th">
                      {keyLabels[key]}
                    </TableCell>
                    {CustomTableCell(key)}
                  </TableRow>
                ),
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ConfirmTable;
