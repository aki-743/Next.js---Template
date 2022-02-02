import React from 'react';
import { BaseComponentProps } from '../../types';

export declare type BaseAccordionProps = {
  /** 要約 */
  primarySummary?: React.ReactNode;
  /** 要約 */
  secondarySummary?: React.ReactNode;
  /** 詳細 */
  details?: React.ReactNode;
  /** disabled */
  disabled?: boolean;
} & BaseComponentProps;
