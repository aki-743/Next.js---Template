import { useAuthQuery } from '../../../hooks/react-query/auth/auth';
import { usePathNameState, useRouterPush } from '../../../hooks/router/router';

const Auth: React.FC = ({ children }) => {
  const pathname = usePathNameState();
  const { data, isLoading, isError } = useAuthQuery(pathname);

  if (!data || isLoading) <></>;

  // 認証に失敗した場合エラーがスローされるので、エラーが発生したらログインページへ遷移
  if (isError) {
    useRouterPush('/');
  }

  return <>{!isLoading && !isError && children}</>;
};

export default Auth;
