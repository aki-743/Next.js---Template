import { DrawerProps } from '@mui/material';

// Drawerのメニューリスト
export declare type DrawerObject = {
  /** メニューテキスト */
  text: string;
  /** アイコン */
  icon?: JSX.Element;
  /** 認証を必要とするか */
  requireAuth?: boolean;
  /** どの認証状態で表示するか */
  requireAuthValue?: boolean;
  /** Dividerを必要とするか */
  requireDivider?: boolean;
  /** メニューがクリックされたときの関数 */
  onClick: () => void;
};

export declare type DrawerList = Array<Array<DrawerObject>>;

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
