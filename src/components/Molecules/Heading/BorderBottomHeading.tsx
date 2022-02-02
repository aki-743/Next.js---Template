import classNames from 'classnames';
import { forwardRef } from 'react';
import { BaseHeadingProps } from '.';
import { AnchorLink } from '../../Atoms/Link';
import styles from './BorderBottomHeading.module.scss';

const BorderBottomHeading = forwardRef<HTMLDivElement, BaseHeadingProps>(function render(
  { id, className, heading, anchorLabel, anchorOnClick },
  ref,
) {
  return (
    <div id={id} className={classNames(styles.root, className)} ref={ref}>
      <div>
        <h3>{heading}</h3>
        {anchorLabel && <AnchorLink label={anchorLabel} onClick={anchorOnClick} />}
      </div>
    </div>
  );
});

export default BorderBottomHeading;
