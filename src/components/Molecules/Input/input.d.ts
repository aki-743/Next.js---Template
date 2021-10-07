import { ChangeEvent } from 'react';

export declare type BaseInputProps = {
  /** id */
  id?: string;
  /** name */
  name?: string;
  /** クラス名 */
  className?: string;
  /** ラベル */
  label?: string;
  /** inputのバリュー */
  value?: string;
  /** Widthをフルにするか */
  fullWidth?: boolean;
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

export declare type SignUpPasswordInputProps = {
  /** 設定するパスワード */
  password1: string;
  /** 確認用パスワード */
  password2: string;
  /** Widthをフルにするか */
  fullWidth?: boolean;
  /** disabled */
  disabled?: boolean;
  /** 設定パスワードが変更されたときの関数 */
  onChangePassword1: (e: ChangeEvent<HTMLInputElement>) => void;
  /** 確認用パスワードが変更されたときの関数 */
  onChangePassword2: (e: ChangeEvent<HTMLInputElement>) => void;
};
