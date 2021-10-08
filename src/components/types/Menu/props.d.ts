export declare type BaseMenuProps = {
  /** メニューを表示する要素 */
  anchorEl: null | HTMLElement;
  /** メニューを閉じる関数 */
  handleClose: () => void;
  /** 表示するメニューの配列 */
  menus: Array<{ label: string; onClick: () => void }>;
};
