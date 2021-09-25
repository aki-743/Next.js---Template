import { AppDispatch } from '../..';
import { APIResponse, PostData } from '../../../api/types/async';

export type RequestAdminApi = (postData: PostData, functionName: string) => Promise<APIResponse | null>;
export type AdminLogin = (password1: string, passoword2: string) => (dispatch: AppDispatch) => Promise<APIResponse | null>;
export type SignOut = () => (dispatch: AppDispatch) => Promise<void>;
