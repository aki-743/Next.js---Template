import { DefaultImage } from '../../Atoms/Image';
import { DefaultIconButton } from '../../Atoms/IconButton';
import { CancelIcon } from '../../Atoms/Icon';
import { BasePreviewProps } from '.';
import styles from './Preview.module.scss';

const DefaultPreview = ({ src, alt, width, height, onClick }: BasePreviewProps) => {
  return (
    <div className={styles.root}>
      <DefaultIconButton onClick={onClick}>
        <CancelIcon size={28} />
      </DefaultIconButton>
      <DefaultImage src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default DefaultPreview;
