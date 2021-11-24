import { ReactNode } from 'react';

/** ボタンのサイズ */
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export declare type BaseButtonProps = {
  /** ラベル */
  label?: string;
  /** type */
  type?: 'submit' | 'reset' | 'button';
  /** ローディング状態 */
  loading?: boolean;
  /** disabledの状態 */
  disabled?: boolean;
  /** Widthを100%にするか */
  fullWidth?: boolean;
  /** ボタンのサイズ */
  size?: ButtonSize;
  /** ボタンに表示するアイコン */
  startIcon?: ReactNode;
  /** ボタンがクリックされたときに実行する関数 */
  onClick?: () => void | Promise<any>;
};

export { default as DangerButton } from './DangerButton';
export { default as DangerSubmitButton } from './DangerSubmitButton';
export { default as DefaultButton } from './DefaultButton';
export { default as DefaultSubmitButton } from './DefaultSubmitButton';
export { default as FileInputButton } from './FileInputButton';
export { default as PrimaryButton } from './PrimaryButton';
export { default as PrimarySubmitButton } from './PrimarySubmitButton';
export { default as SecondaryButton } from './SecondaryButton';
export { default as SecondarySubmitButton } from './SecondarySubmitButton';
