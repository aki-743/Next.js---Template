import { Drawer } from '@mui/material';
import { BaseDrawerProps } from '.';
import styles from './PermanentDrawer.module.scss';

const PermanentDrawer: React.FC<BaseDrawerProps> = ({ children, open }) => {
  return (
    <Drawer className={styles.root} variant="permanent" open={open}>
      {children}
    </Drawer>
  );
};

export default PermanentDrawer;
