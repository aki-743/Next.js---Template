import { List } from '@mui/material';
import { forwardRef, useState } from 'react';
import { ButtonListItem, LinkListItem, BaseListProps, RenderListItemProps } from '.';
import { DefaultCollapse } from '../../Atoms/Collapse';
import { DefaultDivider } from '../../Atoms/Divider';

const RenderListItem: React.VFC<RenderListItemProps> = ({ item }) => {
  const children = item.children;
  const [collapseOpen, setCollapseOpen] = useState(false);

  const toggleCollapseOpen = () => {
    setCollapseOpen(!collapseOpen);
  };

  return (
    <div>
      {children ? <ButtonListItem item={item} collapseOpen={collapseOpen} onClick={toggleCollapseOpen} /> : <LinkListItem item={item} />}
      {Array.isArray(children) && (
        <DefaultCollapse open={collapseOpen}>
          <div>
            {children.map((child) => (
              <RenderListItem key={child.text} item={child} />
            ))}
          </div>
        </DefaultCollapse>
      )}
      {item.isDivided && <DefaultDivider />}
    </div>
  );
};

const LinkList = forwardRef<HTMLDivElement, BaseListProps>(function render({ id, className, items }, ref) {
  return (
    <div id={id} className={className} ref={ref}>
      <List>
        {items.map((item) => (
          <RenderListItem key={item.text} item={item} />
        ))}
      </List>
    </div>
  );
});

export default LinkList;
