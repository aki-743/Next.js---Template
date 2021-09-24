import { AppBar, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Drawer } from '../Drawer';
import { DrawerList } from '../Drawer/type';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useRouterPush } from '../../hooks/router/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

// Drawer
const Header: React.FC = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Drawerメニューのトグル操作
  const toggleDrawer = (drawerState: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(drawerState);
  };

  const selectDrawermenu = (path: string) => {
    useRouterPush(path);
  };

  const drawerList: DrawerList = [
    [{ text: 'メニュー', onClick: () => selectDrawermenu('/menu') }],
    [
      {
        text: 'ログアウト',
        requireAuth: true,
        requireAuthValue: true,
        requireDivider: true,
        onClick: () => selectDrawermenu('/menu/register'),
      },
    ],
    [{ text: 'ログイン', requireAuth: true, requireAuthValue: false, onClick: () => selectDrawermenu('/') }],
    [
      {
        text: '会社登録',
        requireAuth: true,
        requireAuthValue: true,
        onClick: () => selectDrawermenu('/menu/register'),
      },
    ],
  ];

  return (
    <AppBar className="text-white" position="static" color="secondary">
      <Toolbar>
        {process.env.TITLE}
        <Typography variant="h6" className={classes.title}></Typography>
        <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
          <GiHamburgerMenu />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} toggleDrawer={toggleDrawer} drawerList={drawerList} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
