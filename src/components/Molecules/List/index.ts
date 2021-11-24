export declare type ListItem = {
  text: string;
  icon?: React.ReactNode;
  isDivided?: boolean;
  href?: string;
  children?: ListItem[];
};

export declare type ListItems = ListItem[];

export declare type BaseListProps = {
  items: ListItems;
};

export declare type BaseListItemProps = {
  item: ListItem;
  collapseOpen?: boolean;
  onClick?: () => void;
};

export declare type RenderListItemProps = {
  item: ListItem;
};

export { default as ButtonListItem } from './ButtonListItem';
export { default as LinkList } from './LinkList';
export { default as LinkListItem } from './LinkListItem';
