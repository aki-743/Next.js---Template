import { PostData } from '../../api/types/async';

export type ValidateEmail = (email: string) => boolean;
export type ValidatePassword = (password: string) => boolean;
export type ValidateFunctionObj = {
  [key: string]: (value: string) => boolean;
};
export type CheckValueFormat = (postData: PostData) => void;
