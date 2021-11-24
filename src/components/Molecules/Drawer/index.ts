import { BaseListProps } from '../List';

export declare type BaseDrawerProps = {
  /** 表示・非表示の状態 */
  open?: boolean;
  /** 表示・非表示の切り替えを行う関数 */
  toggleDrawer?: (state: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void | null;
  /** 表示するメニューリスト */
  items?: BaseListProps['items'];
};

export { default as PermanentDrawer } from './PermanentDrawer';
