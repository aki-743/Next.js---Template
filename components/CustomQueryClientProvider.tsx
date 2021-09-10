import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { UseQueryPost } from '../interfaces/api';
import { lambdaErrorHandling } from '../common/error';
import { clientAxios } from '../utils/api';
import { apiPaths } from '../utils/api';
import { checkValueFormat } from '../common/validate';

const queryClient = new QueryClient();

export const useQueryPost: UseQueryPost = async (postData, functionName) => {
  checkValueFormat(postData);
  return useQuery([functionName, postData], async () => {
    return await clientAxios
      .post(`${apiPaths[functionName]}`, {
        ...postData,
        env: process.env.USER_BRANCH,
      })
      .then((res) => {
        const data = res.data;
        if (data.body.code === 0) {
          return data;
        } else {
          lambdaErrorHandling(data);
          return null;
        }
      });
  });
};

const CustomQueryClientProvider: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </QueryClientProvider>
  );
};

export default CustomQueryClientProvider;
