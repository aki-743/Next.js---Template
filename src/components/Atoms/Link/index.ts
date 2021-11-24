import { LinkProps } from 'next/link';

export declare type BaseLinkProps = {
  /** ラベル */
  label?: React.ReactNode;
  /** 遷移先のURL */
  href?: LinkProps['href'];
  /** replaceで遷移するか */
  replace?: boolean;
  /** 子コンポーネントにpropsでhrefを渡すか */
  passHref?: boolean;
};

export declare type AnchorLinkProps = {
  /** 遷移先のURL */
  href?: string;
  /** クリックイベント */
  onClick?: () => Promise<void> | void;
} & BaseLinkProps;

export { default as AnchorLink } from './AnchorLink';
export { default as PathLink } from './PathLink';
