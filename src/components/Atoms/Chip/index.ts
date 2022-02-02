import { ChipProps } from '@mui/material';
import { BaseComponentProps } from '../../types';

export declare type BaseChipProps = {
  /** チップの文字 */
  label: string;
  /** カラー */
  color?: ChipProps['color'];
} & BaseComponentProps;

export { default as DefaultChip } from './DefaultChip';
