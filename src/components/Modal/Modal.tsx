import { Modal } from '@material-ui/core';
import { BaseModalProps } from '../types/modal';

const TModal: React.FC<BaseModalProps> = ({ children, open, handleClose }) => {
  return (
    <Modal
      className="flex items-center justify-center"
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="bg-white p-[20px]">{children}</div>
    </Modal>
  );
};

export default TModal;
