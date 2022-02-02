import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import classNames from 'classnames';
import { forwardRef, PropsWithChildren } from 'react';
import { FormDialogProps } from '.';
import { DefaultButton, PrimarySubmitButton } from '../Button';
import styles from './FormDialog.module.scss';

const DefaultDialog = forwardRef<HTMLDivElement, PropsWithChildren<FormDialogProps>>(function render(
  { children, className, open, fullWidth = true, title, dialogText, buttonSize, buttonLoading, onClose, onSubmit },
  ref,
) {
  return (
    <Dialog className={classNames(styles.root, className)} ref={ref} open={open} fullWidth={fullWidth} onClose={onClose}>
      <DialogTitle className="ml-24">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{dialogText}</DialogContentText>
        <form onSubmit={onSubmit} noValidate>
          {children}
          <DialogActions>
            <DefaultButton label="キャンセル" size={buttonSize} loading={buttonLoading} onClick={onClose} />
            <PrimarySubmitButton label="OK" size={buttonSize} loading={buttonLoading} />
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
});

export default DefaultDialog;
