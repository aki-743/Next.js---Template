import { useRouter } from 'next/dist/client/router';
import DefaultButton from '../Button/DefaultButton';
import { BaseCompleteProps } from './type';
import { AiFillCheckCircle } from 'react-icons/ai';

const Complete: React.FC<BaseCompleteProps> = ({ message }) => {
  const router = useRouter();

  return (
    <div className="p-[40px] text-center">
      <div className="mb-[20px] flex justify-center">
        <AiFillCheckCircle size={64} color={'00e676'} />
      </div>
      <h3 className="mb-[20px]">{message}</h3>
      <DefaultButton label="ユーザー画面へ戻る" fullWidth={true} onClick={() => router.push('/user')} />
    </div>
  );
};

export default Complete;
