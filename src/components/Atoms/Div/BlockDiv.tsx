import { forwardRef } from 'react';
import { BaseDivProps } from '.';
import styles from './BlockDiv.module.scss';

const BlockDiv = forwardRef<HTMLDivElement, BaseDivProps>(function RenderBlockDiv(props, ref) {
  return (
    <div className={styles.root} ref={ref} {...props}>
      {props.children}
    </div>
  );
});

export default BlockDiv;
