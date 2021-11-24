import { ReactNode } from 'react';

export declare type BaseTooltipProps = {
  /** ツールチップを表示させるUI */
  children: ReactNode;
  /** ツールチップ中のテキスト */
  title: string;
  /** ツールチップの矢印 */
  arrow: boolean;
};

export declare type ExplainUITooltipProps = {
  /** ツールチップ中のテキスト */
  title: string;
};

export { default as DefaultTooltip } from './DefaultTooltip';
