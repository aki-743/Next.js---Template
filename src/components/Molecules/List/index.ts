import { ListItemProps } from '@mui/material';
import { BaseComponentProps } from '../../types';

export declare type ListItem = {
  /** 表示テキスト */
  text: string;
  /** アイテムのセカンダリーアクション */
  secondaryAction?: ListItemProps['secondaryAction'];
  /** アイコン */
  icon?: React.ReactNode;
  /** アイコンがクリックされたときのコールバック関数 */
  onItemClick?: () => void;
  /** ディバイダーを表示するか */
  isDivided?: boolean;
  /** パス、URL */
  href?: string;
  /** 子要素 */
  children?: ListItem[];
};

export declare type ListItems = ListItem[];

export declare type BaseListProps = {
  items: ListItems;
} & BaseComponentProps;

export declare type BaseListItemProps = {
  item: ListItem;
  collapseOpen?: boolean;
  onClick?: () => void;
};

export declare type RenderListItemProps = {
  item: ListItem;
};

export { default as ButtonList } from './ButtonList';
export { default as ButtonListItem } from './ButtonListItem';
export { default as LinkList } from './LinkList';
export { default as LinkListItem } from './LinkListItem';
