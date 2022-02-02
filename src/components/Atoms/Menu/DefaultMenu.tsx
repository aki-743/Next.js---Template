import { Menu, MenuItem } from '@mui/material';
import { forwardRef } from 'react';
import { BaseMenuProps } from '.';

const DefaultMenu = forwardRef<HTMLDivElement, BaseMenuProps>(function render({ id, className, anchorEl, handleClose, menus }, ref) {
  return (
    <Menu id={id} className={className} ref={ref} anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
      {menus.map((menu, index) => (
        <MenuItem key={index} onClick={menu.onClick}>
          {menu.label}
        </MenuItem>
      ))}
    </Menu>
  );
});

export default DefaultMenu;
