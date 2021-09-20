import { AppBar, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { ExitToApp, Menu } from '@material-ui/icons';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Drawer } from '../Drawer';
import { DrawerList } from '../Drawer/Drawer';

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
  const router = useRouter();
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
    router.push(path);
  };

  const drawerList: DrawerList = [
    [{ text: 'メニュー', icon: <ExitToApp />, onClick: () => selectDrawermenu('/menu') }],
    [
      {
        text: 'ログアウト',
        icon: <ExitToApp />,
        requireAuth: true,
        requireAuthValue: true,
        requireDivider: true,
        onClick: () => selectDrawermenu('/menu/register'),
      },
    ],
    [{ text: 'ログイン', icon: <ExitToApp />, requireAuth: true, requireAuthValue: false, onClick: () => selectDrawermenu('/') }],
    [
      {
        text: '会社登録',
        icon: <ExitToApp />,
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
          <Menu />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} toggleDrawer={toggleDrawer} drawerList={drawerList} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
