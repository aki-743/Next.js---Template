import { AppBar, Avatar, Button, createStyles, DrawerProps, IconButton, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { AccountCircle, EventAvailable, ExitToApp, Home, Menu, PersonAdd } from '@material-ui/icons';
import { MouseEvent, useEffect, useState } from 'react';
import { ToggleMenu } from './';
import Image from 'next/image';
import Logo from '../assets/images/logo.jpeg';
import CustomDrawer from './CustomDrawer';
import { DrawerList } from '../interfaces';
import { useRouter } from 'next/dist/client/router';

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

// ToggleMenu
// const Header: React.FC = () => {
//     const classes = useStyles();
//     const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null),
//         [companyName, setCompanyName] = useState("");

//     const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
//         setAnchorEl(event.currentTarget);
//     };

//     //
//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     const menus = [{ label: "ログアウト", onClick: () => console.log("a") }];

//     return (
//         <AppBar position="static" color="primary">
//             <Toolbar>
//                 <Image className={classes.title} src={Logo} alt="narite logo" width={50} height={50} />
//                 <Typography variant="h6" className={classes.title}>
//                 </Typography>
//                 <Button
//                     className="py-5 bg-transparent text-white lowercase"
//                     startIcon={<AccountCircle />}
//                     onClick={(e) => handleClick(e)}
//                 >
//                     {companyName} 様
//                 </Button>
//                 <ToggleMenu anchorEl={anchorEl} handleClose={handleClose} menus={menus} />
//             </Toolbar>
//         </AppBar>
//     );
// };

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
    [{ text: 'ホーム', icon: <Home />, onClick: () => selectDrawermenu('/') }],
    [
      { text: 'サインイン', icon: <ExitToApp />, onClick: () => selectDrawermenu('/signin') },
      { text: '会員登録', icon: <PersonAdd />, onClick: () => selectDrawermenu('/signup') },
    ],
    [
      {
        text: '予約',
        icon: <EventAvailable />,
        onClick: () => selectDrawermenu('https://airrsv.net/narite/calendar'),
      },
    ],
  ];

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Image src={Logo} alt="narite logo" width={50} height={50} placeholder="blur" />
        <Typography variant="h6" className={classes.title}></Typography>
        <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
          <Menu />
        </IconButton>
        <CustomDrawer anchor="right" open={drawerOpen} toggleDrawer={toggleDrawer} drawerList={drawerList} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
