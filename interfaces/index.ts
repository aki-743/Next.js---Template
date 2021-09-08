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

export type PostData = {
    admin_password1?: string;
    admin_password2?: string;
    env?: string;
    store_name?: string;
    oid?: string;
    email?: string;
    representative?: string;
    phone?: string;
    address?: string;
    path_name?: string;
    dev_stripe_access_key?: string;
    dev_stripe_secret_key?: string;
    test_stripe_access_key?: string;
    test_stripe_secret_key?: string;
    prd_stripe_access_key?: string;
    prd_stripe_secret_key?: string;
};
