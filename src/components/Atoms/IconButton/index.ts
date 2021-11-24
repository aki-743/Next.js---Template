import { IconButtonProps } from '@mui/material';
import { MouseEvent } from 'react';

export declare type BaseIconButtonProps = {
  color?: IconButtonProps['color'];
  onClick?: (e: MouseEvent<HTMLElement>) => void;
};

export { default as DefaultIconButton } from './DefaultIconButton';
