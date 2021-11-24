import { BaseHeadingProps } from '.';
import { AnchorLink } from '../../Atoms/Link';
import styles from './BorderBottomHeading.module.scss';

const BorderBottomHeading = ({ heading, anchorLabel, anchorOnClick }: BaseHeadingProps) => {
  return (
    <div className={styles.root}>
      <div>
        <h3>{heading}</h3>
        {anchorLabel && <AnchorLink label={anchorLabel} onClick={anchorOnClick} />}
      </div>
    </div>
  );
};

export default BorderBottomHeading;
