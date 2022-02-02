import classNames from 'classnames';
import { forwardRef } from 'react';
import { BaseHeadingProps } from '.';
import { AnchorLink } from '../../Atoms/Link';
import styles from './BorderBottomHeading.module.scss';

const BorderBottomAndAnchorHeading = forwardRef<HTMLDivElement, BaseHeadingProps>(function render(
  { id, className, heading, href, anchorLabel, anchorOnClick },
  ref,
) {
  return (
    <div id={id} className={classNames(styles.root, className)} ref={ref}>
      <div>
        <a id={id} href={href}>
          <h3>{heading}</h3>
        </a>
        {anchorLabel && <AnchorLink label={anchorLabel} onClick={anchorOnClick} />}
      </div>
    </div>
  );
});

export default BorderBottomAndAnchorHeading;
