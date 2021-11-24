import { DividerProps } from '@mui/material';

export declare type DividerWithTextProps = {
  /** Dividerに表示する文字 */
  text: string;
  /** テキストを表示する位置 */
  align?: DividerProps['textAlign'];
};

export { default as DefaultDivider } from './DefaultDivider';
export { default as DividerWithText } from './DividerWithText';
