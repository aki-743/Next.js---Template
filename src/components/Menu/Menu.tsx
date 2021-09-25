import { makeStyles, Menu, MenuItem } from '@material-ui/core';
import { BaseMenuProps } from '../types/menu';

const useStyles = makeStyles({
  root: {
    '& > .MuiMenu-paper': {
      top: '50px !important',
    },
  },
});

const TMenu: React.FC<BaseMenuProps> = ({ anchorEl, handleClose, menus }) => {
  const classes = useStyles();

  return (
    <Menu className={classes.root} anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
      {menus.map((menu) => (
        <MenuItem key={menu.label} onClick={menu.onClick}>
          {menu.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default TMenu;
