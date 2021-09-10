// Materil-uiに使う色
export type MaterialColor = 'main' | 'main-light' | 'main-dark' | 'google' | 'facebook' | 'twitter' | 'warn' | 'default';

// Drawerのメニューリスト
export type DrawerObject = {
  text: string;
  icon: JSX.Element;
  /** 認証を必要とするか */
  requireAuth?: boolean;
  requireAuthValue?: boolean;
  /** Dividerを必要とするか */
  requireDivider?: boolean;
  onClick: () => void;
};

export type DrawerList = Array<Array<DrawerObject>>;
