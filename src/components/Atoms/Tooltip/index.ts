import { BaseComponentProps } from '../../types';

export declare type BaseTooltipProps = {
  /** ツールチップ中のテキスト */
  title: string;
  /** ツールチップの矢印 */
  arrow?: boolean;
} & BaseComponentProps;

export { default as DefaultTooltip } from './DefaultTooltip';
