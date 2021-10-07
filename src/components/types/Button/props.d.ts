import { ReactNode } from 'react';

/** ボタンのサイズ */
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export declare type BaseButtonProps = {
  /** ラベル */
  label?: string;
  /** type */
  type?: 'submit' | 'reset' | 'button';
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
