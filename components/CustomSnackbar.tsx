import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Alert } from '@material-ui/lab';
import { snackbarSlice } from '../store/snackbar';
import { Snackbar } from '@material-ui/core';
import { snackbarSelector } from '../store/snackbar/selector';

const CustomSnackbar: React.FC = () => {
  const dispatch = useDispatch();
  const snackbar = useSelector(snackbarSelector);
  const [open, setOpen] = useState(false),
    [message, setMessage] = useState('');

  const handleClose = () => {
    dispatch(snackbarSlice.actions.reset());
  };

  // レンダリング毎にスナックバーの状態をリセット
  useEffect(() => {
    if (snackbar.open) {
      setOpen(true);
      setMessage(snackbar.message);
    }
    dispatch(snackbarSlice.actions.reset());
  }, [dispatch, snackbar]);

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
