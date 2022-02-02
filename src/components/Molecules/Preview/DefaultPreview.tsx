import { DefaultImage } from '../../Atoms/Image';
import { DefaultIconButton } from '../../Atoms/IconButton';
import { CancelIcon } from '../../Atoms/Icon';
import { BasePreviewProps } from '.';
import styles from './Preview.module.scss';
import { DashedBox } from '../../Atoms/Box';
import { forwardRef } from 'react';
import classNames from 'classnames';

const DefaultPreview = forwardRef<HTMLDivElement, BasePreviewProps>(function render({ id, className, src, width, height, onDelete }, ref) {
  return (
    <div id={id} className={classNames(styles.root, className)} ref={ref}>
      <DefaultIconButton onClick={onDelete}>
        <CancelIcon size={28} />
      </DefaultIconButton>
      <DashedBox className={styles.box_wrapper}>
        {src ? <DefaultImage src={src} alt="preview" width={width} height={height} /> : <span>画像をアップロード</span>}
      </DashedBox>
    </div>
  );
});

export default DefaultPreview;
