import DefaultButton from '../Button/DefaultButton';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useRouterPush } from '../../hooks/router/router';
import { BaseCompleteProps } from '../types/complete';

const Complete: React.FC<BaseCompleteProps> = ({ message }) => {
  return (
    <div className="p-[40px] text-center">
      <div className="mb-[20px] flex justify-center">
        <AiFillCheckCircle size={64} color={'00e676'} />
      </div>
      <h3 className="mb-[20px]">{message}</h3>
      <DefaultButton label="ユーザー画面へ戻る" fullWidth={true} onClick={() => useRouterPush('/user')} />
    </div>
  );
};

export default Complete;
