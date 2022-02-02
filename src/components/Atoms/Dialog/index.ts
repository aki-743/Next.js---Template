import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { BaseComponentProps } from '../../types';
import { ButtonSize } from '../Button';

export declare type BaseDialogProps = {
  /** ダイアログの表示・非表示状態 */
  open?: boolean;
  /** フルワイド */
  fullWidth?: boolean;
  /** タイトル */
  title?: React.ReactNode;
  /** ダイアログテキスト */
  dialogText?: React.ReactNode;
  /** ボタンのサイズ */
  buttonSize?: ButtonSize;
  /** ボタンのローディング状態 */
  buttonLoading?: boolean;
  /** OKが押されたときのコールバック関数 */
  onClick?: () => void;
  /** ダイアログを非表示にするコールバック関数 */
  onClose?: () => void;
} & BaseComponentProps;

export declare type FormDialogProps = {
  /** サブミット関数 */
  onSubmit?: SubmitHandler<any>;
} & BaseDialogProps;

export { default as FormDialog } from './FormDialog';
