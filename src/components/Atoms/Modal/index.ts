import { BaseComponentProps } from '../../types';

export declare type BaseModalProps = {
  /** モダールの状態 */
  open: boolean;
  /** モーダルを閉じる関数 */
  handleClose: () => void;
} & BaseComponentProps;

export { default as DefaultModal } from './DefaultModal';
