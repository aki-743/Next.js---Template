import { ReactNode } from 'react';

/** ボタンのサイズ */
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export type BaseButtonProps = {
  /** ラベル */
  label?: string;
  /** クラス名 */
  className?: string;
  /** disabled */
  disabled?: boolean;
  /** Widthをフルにするか */
  fullWidth?: boolean;
  /** ボタンのサイズ */
  size?: ButtonSize;
  /** ボタンに表示するアイコン */
  startIcon?: ReactNode;
  /** ボタンがクリックされたときに実行する関数 */
  onClick?: () => void;
};
