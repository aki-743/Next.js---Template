// Materil-uiに使う色
export type MaterialColor = "main" | "secondary" | "google" | "facebook" | "warn" | "default";

// Drawerのメニューリスト
export type DrawerObject = {
    text: string;
    icon: JSX.Element;
    onClick: () => void;
};

export type DrawerList = Array<Array<DrawerObject>>;