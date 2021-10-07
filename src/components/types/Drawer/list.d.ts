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
