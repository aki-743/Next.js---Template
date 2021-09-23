import { ChangeEvent } from 'react';

export type BaseTextInputProps = {
  /** クラス名 */
  className?: string;
  /** ラベル */
  label?: string;
  /** inputのバリュー */
  value?: string;
  /** Widthをフルにするか */
  fullWidth?: boolean;
  /** inputのタイプ */
  type?: string;
  /** disabled */
  disabled?: boolean;
  /** 複数行にするか */
  multiline?: boolean;
  /** 複数行にした場合の列数 */
  rows?: number;
  /** 文字数の制限 */
  limit?: number;
  /** 必須項目 */
  isRequired?: boolean;
  /** バリューが変更されたときの関数 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
