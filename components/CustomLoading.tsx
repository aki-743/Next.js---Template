import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { loadingSlice } from '../store/loading';
import { useEffect } from 'react';
import { Modal } from '@material-ui/core';
import { loadingSelector } from '../store/loading/selector';

const CustomLoading: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);

  // レンダリング毎にローディングの状態をリセット
  useEffect(() => {
    dispatch(loadingSlice.actions.reset());
  }, []);

  return (
    <Modal className="flex items-center justify-center" open={loading.open} aria-labelledby="loading" disableEnforceFocus>
      <ReactLoading type="spinningBubbles" />
    </Modal>
  );
};

export default CustomLoading;
