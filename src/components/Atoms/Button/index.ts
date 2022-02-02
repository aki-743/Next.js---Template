import { ReactNode } from 'react';

/**
 * ボタンのサイズ
 *
 * @default md
 */
export declare type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export declare type BaseButtonProps = {
  /** ラベル */
  label?: string;
  /** type */
  type?: 'submit' | 'reset' | 'button';
  /** HTMLタグ */
  component?: string;
  /** ローディング状態 */
  loading?: boolean;
  /** bgを透明にするか */
  bgTransparent?: boolean;
  /** disabledの状態 */
  disabled?: boolean;
  /** Widthを100%にするか */
  fullWidth?: boolean;
  /** ボタンの表示方法 */
  variant?: 'text' | 'outlined' | 'contained';
  /** ボタンのサイズ */
  size?: ButtonSize;
  /** ボタンに表示するアイコン */
  startIcon?: ReactNode;
  /** ボタンのclass */
  className?: string;
  /** ボタンがクリックされたときに実行する関数 */
  onClick?: () => void | Promise<any>;
};

export { default as DangerButton } from './DangerButton';
export { default as DangerSubmitButton } from './DangerSubmitButton';
export { default as DefaultButton } from './DefaultButton';
export { default as DefaultSubmitButton } from './DefaultSubmitButton';
export { default as PrimaryButton } from './PrimaryButton';
export { default as PrimarySubmitButton } from './PrimarySubmitButton';
export { default as SecondaryButton } from './SecondaryButton';
export { default as SecondarySubmitButton } from './SecondarySubmitButton';
