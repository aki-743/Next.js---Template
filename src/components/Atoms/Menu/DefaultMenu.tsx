import { Menu, MenuItem } from '@mui/material';
import { BaseMenuProps } from '.';

const DefaultMenu: React.FC<BaseMenuProps> = ({ anchorEl, handleClose, menus }) => {
  return (
    <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
      {menus.map((menu, index) => (
        <MenuItem key={index} onClick={menu.onClick}>
          {menu.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default DefaultMenu;
