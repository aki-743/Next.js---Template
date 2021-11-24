export declare type BaseHeadingProps = {
  /** 見出し */
  heading: string;
  /** 見出しがクリックされたときの遷移先 */
  href?: string;
  /** リンクのテキスト */
  anchorLabel?: string;
  /** リンクがクリックされたとき */
  anchorOnClick?: () => void;
};

export { default as BorderBottomAnchorHeading } from './BorderBottomAnchorHeading';
export { default as BorderBottomHeading } from './BorderBottomHeading';
