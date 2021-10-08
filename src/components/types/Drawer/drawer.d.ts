import { DrawerProps } from '@mui/material';
import { DrawerList } from './list';

export declare type BaseDrawerProps = {
  /** Drawerを表示する位置 */
  anchor: DrawerProps['anchor'];
  /** 表示・非表示の状態 */
  open: boolean;
  /** 表示・非表示の切り替えを行う関数 */
  toggleDrawer: (state: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void | null;
  /** 表示するメニューリスト */
  drawerList: DrawerList;
};
