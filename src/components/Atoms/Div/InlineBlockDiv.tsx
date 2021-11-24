import { forwardRef } from 'react';
import { BaseDivProps } from '.';
import styles from './InlineBlockDiv.module.scss';

const InlineBlockDiv = forwardRef<HTMLDivElement, BaseDivProps>(function RenderInlineBlockDiv(props, ref) {
  return (
    <div className={styles.root} ref={ref} {...props}>
      {props.children}
    </div>
  );
});

export default InlineBlockDiv;
