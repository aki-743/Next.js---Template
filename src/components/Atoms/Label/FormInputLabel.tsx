import { BaseLabelProps } from '.';
import styles from './FormInputLabel.module.scss';

const FormInputLabel = (props: BaseLabelProps) => {
  return (
    <div className={styles.root}>
      <label htmlFor={props.htmlFor}>
        <span>{props.label}</span>
      </label>
    </div>
  );
};

export default FormInputLabel;
