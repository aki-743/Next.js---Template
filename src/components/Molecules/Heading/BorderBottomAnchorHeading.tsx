import { BaseHeadingProps } from '.';
import { AnchorLink } from '../../Atoms/Link';
import styles from './BorderBottomHeading.module.scss';

const BorderBottomAndAnchorHeading = ({ heading, href, anchorLabel, anchorOnClick }: BaseHeadingProps) => {
  return (
    <div className={styles.root}>
      <div>
        <a id={href} href={href}>
          <h3>{heading}</h3>
        </a>
        {anchorLabel && <AnchorLink label={anchorLabel} onClick={anchorOnClick} />}
      </div>
    </div>
  );
};

export default BorderBottomAndAnchorHeading;
