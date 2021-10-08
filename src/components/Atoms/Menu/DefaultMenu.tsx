import { Menu, MenuItem } from '@mui/material';
import { BaseMenuProps } from '../../types/Menu/props';

const DefaultMenu: React.FC<BaseMenuProps> = ({ anchorEl, handleClose, menus }) => {
  return (
    <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
      {menus.map((menu) => (
        <MenuItem key={menu.label} onClick={menu.onClick}>
          {menu.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default DefaultMenu;
