import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLessIcon, ExpandMoreIcon } from '../../Atoms/Icon';
import { BaseListItemProps } from '.';

const ICON_SIZE = 24;

const ButtonListItem: React.FC<BaseListItemProps> = ({ item, collapseOpen, onClick }) => {
  const children = item.children;

  return (
    <ListItem secondaryAction={item.secondaryAction} disablePadding>
      <ListItemButton onClick={onClick}>
        {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
        <ListItemText primary={item.text} />
        {children && (collapseOpen ? <ExpandLessIcon size={ICON_SIZE} /> : <ExpandMoreIcon size={ICON_SIZE} />)}
      </ListItemButton>
    </ListItem>
  );
};

export default ButtonListItem;
