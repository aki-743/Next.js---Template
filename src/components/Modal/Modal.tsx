import { Modal } from '@material-ui/core';

type Props = {
  open: boolean;
  handleClose: () => void;
};

const TModal: React.FC<Props> = ({ children, open, handleClose }) => {
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
