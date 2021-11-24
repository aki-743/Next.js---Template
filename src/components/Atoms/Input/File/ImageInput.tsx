import { BaseFileInputProps } from '..';
import { FileInputButton } from '../../Button';
import styles from './ImageInput.module.scss';

const ImageInput = ({ id, name, value, buttonLabel, fullWidth, disabled, size, onChange }: BaseFileInputProps) => {
  return (
    <label className={styles.root} htmlFor={id}>
      <input accept="image/*" id={id} type="file" name={name} value={value} onChange={onChange} />
      <FileInputButton label={buttonLabel} fullWidth={fullWidth} disabled={disabled} size={size} />
    </label>
  );
};

export default ImageInput;
