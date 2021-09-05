// Materil-uiに使う色
export type MaterialColor = "main" | "main-light" | "main-dark" | "google" | "facebook" | "twitter" | "warn" | "default";

// Drawerのメニューリスト
export type DrawerObject = {
    text: string;
    icon: JSX.Element;
    onClick: () => void;
};

export type DrawerList = Array<Array<DrawerObject>>;