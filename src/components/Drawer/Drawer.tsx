import React from 'react';
import { Divider, Drawer, DrawerProps, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

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

type Props = {
  anchor: DrawerProps['anchor'];
  open: boolean;
  toggleDrawer: (state: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void | null;
  drawerList: DrawerList;
};

const TDrawer: React.FC<Props> = ({ anchor, open, toggleDrawer, drawerList }) => {
  const classes = useStyles();
  const isLogined = true;

  return (
    <Drawer anchor={anchor} open={open} onClose={toggleDrawer(false)}>
      <div className={classes.list} role="header menu" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        <List>
          {drawerList.map((menus: Array<DrawerObject>, index: number) =>
            menus.map((menu) => (
              <React.Fragment key={index}>
                {/* // 認証が必要な場合 */}
                {menu.requireAuth ? (
                  menu.requireAuthValue === isLogined && (
                    <ListItem button onClick={menu.onClick}>
                      <ListItemIcon>{menu.icon}</ListItemIcon>
                      <ListItemText primary={menu.text} />
                    </ListItem>
                  )
                ) : (
                  <ListItem button onClick={menu.onClick}>
                    <ListItemIcon>{menu.icon}</ListItemIcon>
                    <ListItemText primary={menu.text} />
                  </ListItem>
                )}
                {menu.requireDivider && <Divider />}
              </React.Fragment>
            )),
          )}
        </List>
      </div>
    </Drawer>
  );
};

export default TDrawer;