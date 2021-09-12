import { useQuery, QueryClient, QueryClientProvider, UseQueryResult } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { lambdaErrorHandling } from '../common/error';
import { checkValueFormat } from '../common/validate';
import axios from 'axios';
import { APIResponse, PostData } from '../api/middleware/async';

const queryClient = new QueryClient();

/**
 * REST-API の POST メソッドを実行する
 *
 * @param {Object} postData APIで渡すデータ
 * @param {string} functionKey 呼び出す関数名
 */
export type UseQueryPost = (postData?: PostData, functionName?: string) => Promise<UseQueryResult | APIResponse>;

export const useQueryPost: UseQueryPost = async (postData, functionName) => {
  checkValueFormat(postData);
  return useQuery([functionName, postData], async () => {
    return await axios
      .post('/a', {
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
