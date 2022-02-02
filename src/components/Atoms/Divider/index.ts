import { DividerProps } from '@mui/material';
import React from 'react';
import { BaseComponentProps } from '../../types';

export declare type BaseDividerProps = BaseComponentProps;

export declare type DividerWithTextProps = {
  /** Dividerに表示する文字 */
  text?: React.ReactNode;
  /** テキストを表示する位置 */
  align?: DividerProps['textAlign'];
} & BaseDividerProps;

export { default as DefaultDivider } from './DefaultDivider';
export { default as DividerWithText } from './DividerWithText';
