import { IconButtonProps } from '@mui/material';
import { MouseEvent } from 'react';
import { BaseComponentProps } from '../../types';

export declare type BaseIconButtonProps = {
  /** アイコンの色 */
  color?: IconButtonProps['color'];
  /** パス */
  href?: string;
  /** アイコンがクリックされたときのコールバック関数 */
  onClick?: (e: MouseEvent<HTMLElement>) => void;
} & BaseComponentProps;

export { default as DefaultIconButton } from './DefaultIconButton';
