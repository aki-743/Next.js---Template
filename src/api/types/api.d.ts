import { PostData, APIResponse } from './async';

export type RequestAdminApi = (functionName: string, postData?: PostData) => Promise<APIResponse | null>;
