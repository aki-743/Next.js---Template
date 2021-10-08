import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { BaseDrawerProps } from '../../types/Drawer/drawer';
import { DrawerObject } from '../../types/Drawer/list';
import styles from './Drawer.module.scss';

const DefaultDrawer: React.FC<BaseDrawerProps> = ({ anchor, open, toggleDrawer, drawerList }) => {
  const isLogined = true;

  return (
    <Drawer anchor={anchor} open={open} onClose={toggleDrawer(false)}>
      <div className={styles.root} role="header menu" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        <List>
          {drawerList.map((menus: Array<DrawerObject>, index: number) =>
            menus.map((menu) => (
              <React.Fragment key={index}>
                {/* // 認証が必要な場合 */}
                {menu.requireAuth ? (
                  menu.requireAuthValue === isLogined && (
                    <ListItem button onClick={menu.onClick}>
                      {menu.icon && <ListItemIcon>{menu.icon}</ListItemIcon>}
                      <ListItemText primary={menu.text} />
                    </ListItem>
                  )
                ) : (
                  <ListItem button onClick={menu.onClick}>
                    {menu.icon && <ListItemIcon>{menu.icon}</ListItemIcon>}
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

export default DefaultDrawer;
