import { BaseLabelProps } from '../../types/Label/props';
import styles from './FormInputLable.module.scss';

const FormInputLabel: React.FC<BaseLabelProps> = ({ htmlFor, label }) => {
  return (
    <div className={styles.root}>
      <label htmlFor={htmlFor}>
        <span>{label}</span>
      </label>
    </div>
  );
};

export default FormInputLabel;
