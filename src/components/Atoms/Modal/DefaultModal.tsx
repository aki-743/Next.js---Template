import { Modal } from '@mui/material';
import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import { BaseModalProps } from '.';

const TModal = forwardRef<HTMLDivElement, BaseModalProps>(function render({ id, className, children, open, handleClose }, ref) {
  return (
    <Modal
      id={id}
      className={classNames('flex items-center justify-center', className)}
      ref={ref}
      open={open}
      onClose={handleClose}
      aria-labelledby="default-modal"
    >
      <div className="p-24 bg-white">{children}</div>
    </Modal>
  );
});

export default TModal;
