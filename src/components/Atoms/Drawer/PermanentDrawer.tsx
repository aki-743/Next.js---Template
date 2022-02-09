import { Drawer } from '@mui/material';
import classNames from 'classnames';
import { forwardRef, PropsWithChildren } from 'react';
import { BaseDrawerProps } from '.';
import styles from './PermanentDrawer.module.scss';

const PermanentDrawer = forwardRef<HTMLDivElement, PropsWithChildren<BaseDrawerProps>>(function render(
  { children, id, className, open },
  ref,
) {
  return (
    <Drawer id={id} className={classNames(styles.root, className)} ref={ref} variant="permanent" open={open}>
      {children}
    </Drawer>
  );
});

export default PermanentDrawer;
