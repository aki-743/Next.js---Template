import { Divider, Drawer, DrawerProps, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { DrawerList, DrawerObject } from '../interfaces';
import { isLoginedSelector } from '../store/user/selector';

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
  const isLogined = useSelector(isLoginedSelector);

  return (
    <Drawer anchor={anchor} open={open} onClose={toggleDrawer(false)}>
      <div className={classes.list} role="header menu" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        <List>
          {drawerList.map((menus: Array<DrawerObject>, index: number) => (
            <Fragment key={index}>
              {menus.map((menu) => (
                <>
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
                </>
              ))}
            </Fragment>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default CustomDrawer;
