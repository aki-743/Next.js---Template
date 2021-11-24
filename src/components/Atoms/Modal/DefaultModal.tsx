import { Modal } from '@mui/material';
import { BaseModalProps } from '.';
import styles from './Modal.module.scss';

const TModal: React.FC<BaseModalProps> = ({ children, open, handleClose }) => {
  return (
    <Modal className={styles.root} open={open} onClose={handleClose} aria-labelledby="default-modal">
      <div>{children}</div>
    </Modal>
  );
};

export default TModal;
