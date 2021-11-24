import { AppBar, Toolbar } from '@mui/material';
import { BaseAppBarProps } from '.';
import styles from './EdgeAppBar.module.scss';

const EdgeAppBar: React.FC<BaseAppBarProps> = ({ children, position = 'static' }) => {
  return (
    <AppBar className={styles.root} position={position}>
      <Toolbar className={styles.toolbar}>{children}</Toolbar>
    </AppBar>
  );
};

export default EdgeAppBar;
