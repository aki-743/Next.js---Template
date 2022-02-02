import { BaseComponentProps } from '../../types';

export declare type BaseStepperProps = {
  /** activeStep */
  activeStep: number;
  /** ラベル */
  steps?: string[];
  /** i番目の完了しているか */
  completed?: boolean[];
  /** activeStepを操作する関数 */
  handleStep?: (step: number) => void;
  /** completedを操作する関数 */
  handleCompleted?: (step: number) => void;
} & BaseComponentProps;

export { default as DefaultStepper } from './DefaultStepper';
export { default as ButtonStepper } from './ButtonStepper';
