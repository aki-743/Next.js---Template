import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useRouterPush } from '../../../hooks/router/router';
import { DrawerList } from '../../types/Drawer/drawer';
import { DefaultDrawer } from '../Drawer';

// Drawer
const Header: React.FC = () => {
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
    <AppBar className="text-white bg-main" position="static">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="flex-grow-1">
          {process.env.TITLE}
        </Typography>
        <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
          <GiHamburgerMenu className="text-white" />
        </IconButton>
        <DefaultDrawer anchor="right" open={drawerOpen} toggleDrawer={toggleDrawer} drawerList={drawerList} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
