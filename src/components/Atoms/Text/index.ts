import { BaseComponentProps } from '../../types';

export declare type BaseTextProps = {
  /** 表示するメッセージ */
  text: React.ReactNode;
} & BaseComponentProps;

export { default as HelperText } from './HelperText';
export { default as WarnText } from './WarnText';
