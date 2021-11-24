import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useRouter } from 'next/dist/client/router';
import { MouseEvent } from 'react';
import { BaseListItemProps } from '.';

const LinkListItem: React.FC<BaseListItemProps> = ({ item }) => {
  const router = useRouter();

  // routerでページ遷移を行う
  const handleOnClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(item.href);
  };

  return (
    <ListItemButton component="a" href={item.href} onClick={handleOnClick}>
      {item.icon ? <ListItemIcon>{item.icon}</ListItemIcon> : null}
      <ListItemText inset primary={item.text} />
    </ListItemButton>
  );
};

export default LinkListItem;
