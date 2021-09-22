import { CheckCircle } from '@material-ui/icons';
import { useRouter } from 'next/dist/client/router';
import DefaultButton from '../Button/DefaultButton';

type Props = {
  message: string;
};

const Complete: React.FC<Props> = ({ message }) => {
  const router = useRouter();

  return (
    <div className="p-[40px] text-center">
      <CheckCircle className="mb-[20px] text-green-400 w-[64px] h-[64px]" />
      <h3 className="mb-[20px]">{message}</h3>
      <DefaultButton label="ユーザー画面へ戻る" fullWidth={true} onClick={() => router.push('/user')} />
    </div>
  );
};

export default Complete;