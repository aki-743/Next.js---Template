import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { useEffect } from 'react';
import { loadingSelector } from '../../store/loading/selector';
import { loadingSlice } from '../../store/loading/slice';
import { Backdrop } from '@material-ui/core';

const DispatchLoading: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);

  // レンダリング毎にローディングの状態をリセット
  useEffect(() => {
    dispatch(loadingSlice.actions.close());
  }, [dispatch]);

  return (
    <Backdrop className="z-[1300]" open={loading.open} aria-labelledby="loading">
      <ReactLoading type="spinningBubbles" />
    </Backdrop>
  );
};

export default DispatchLoading;
