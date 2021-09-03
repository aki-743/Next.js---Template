import { Divider, Drawer, DrawerProps, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { Fragment, KeyboardEventHandler, MouseEventHandler } from 'react';
import { DrawerList, DrawerObject } from '../interfaces';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

type Props = {
  anchor: DrawerProps['anchor'];
  open: boolean;
  toggleDrawer: (state: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void | null;
  drawerList: DrawerList;
};

const CustomDrawer: React.FC<Props> = ({ anchor, open, toggleDrawer, drawerList }) => {
  const classes = useStyles();

  return (
    <Drawer anchor={anchor} open={open} onClose={toggleDrawer(false)}>
      <div className={classes.list} role="header menu" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        {drawerList.map((menus: Array<DrawerObject>, index: number) => (
          <Fragment key={index}>
            <List>
              {menus.map((menu: DrawerObject) => (
                <ListItem button key={menu.text} onClick={menu.onClick}>
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText primary={menu.text} />
                </ListItem>
              ))}
            </List>
            <Divider />
          </Fragment>
        ))}
      </div>
    </Drawer>
  );
};

export default CustomDrawer;
