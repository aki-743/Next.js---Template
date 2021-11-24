import { FormInputLabel } from '../../../Atoms/Label';
import { ExplainUITooltip } from '../../Tooltip';
import { BaseFileInputProps, ImageInput } from '../../../Atoms/Input';
import { DefaultChip } from '../../../Atoms/Chip';
import { DefaultPreview } from '../../Preview';
import { InputValidateError } from '../../../Atoms/Error';
import { HelperText } from '../../../Atoms/Text';
import styles from './ImageInputField.module.scss';
import { ChangeEvent, useCallback, useState } from 'react';

const FORM_INPUT_LABEL = '画像';
const EXPLAIN_UI_TOOLTIP_TITLE = '商品の画像です。';

const ImageInputField = (props: BaseFileInputProps) => {
  /** プレビューのsrc */
  const [src, setSrc] = useState(null);
  /** プレビューのheight */
  const [height, setHeight] = useState(props.height);

  // アップロードされた画像のwidthとheightを取得する関数
  const generateSize = useCallback((file) => {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        const size = {
          width: img.naturalWidth,
          height: img.naturalHeight,
        };

        URL.revokeObjectURL(img.src);
        resolve(size);
      };

      img.onerror = (error) => {
        reject(error);
      };

      img.src = URL.createObjectURL(file);
    });
  }, []);

  const inputFile = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      // アップロードされた画像の情報をfileに格納
      const file = event.target.files[0];

      generateSize(file).then((size: { width: number; height: number }) => {
        // StaticImageDataオブジェクトの作成
        const height = Math.round(props.width * (size.height / size.width) * 10) / 10;

        const StaticImageData = {
          src: URL.createObjectURL(file),
          width: props.width,
          height: height,
        };

        setSrc(StaticImageData);

        // プレビュー画像のheightを変える
        setHeight(height);
      });

      props.onChange(event);
    },
    [props.width],
  );

  return (
    <div className={styles.root}>
      <div>
        <FormInputLabel htmlFor={props.name} label={props.label} />
        {props.tooltipTitle && <ExplainUITooltip title={props.tooltipTitle} />}
        {props.chipLabel && <DefaultChip label={props.chipLabel} color={props.chipColor} />}
      </div>
      <DefaultPreview onClick={props.onClick} src={src} alt={props.alt} width={props.width} height={height} />
      <ImageInput {...props} onChange={inputFile} />
      <InputValidateError errors={props.errors} />
      {props.helperText && <HelperText text={props.helperText} />}
    </div>
  );
};

export default ImageInputField;
