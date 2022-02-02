import { Tab, Tabs } from '@mui/material';
import { BaseTabsProps } from '.';

const ScrollableWithAllowButtonTabs: React.VFC<BaseTabsProps> = ({ className, value, centered = true, onChange, labels }) => {
  return (
    <Tabs
      className={className}
      value={value}
      onChange={onChange}
      centered={centered}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
    >
      {labels.map((label, index) => (
        <Tab key={index} label={label.text} component={label.component} href={label.href} onClick={label.onClick} />
      ))}
    </Tabs>
  );
};

export default ScrollableWithAllowButtonTabs;
