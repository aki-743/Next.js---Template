import { LinkProps } from 'next/link';

export declare type BaseLinkProps = {
  /** ラベル */
  label: string;
  /** 遷移先のパラメータ */
  href?: LinkProps['href'];
  /** replaceで遷移するか */
  replace?: boolean;
  /** 子コンポーネントにpropsでhrefを渡すか */
  passHref?: boolean;
};

export declare interface AnchorLinkProps extends BaseLinkProps {
  /** 遷移先のパス */
  href?: string;
  /** クリックイベント */
  onClick?: () => void;
}
