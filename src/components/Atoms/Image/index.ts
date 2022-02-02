import { ImageProps } from 'next/image';
import { BaseComponentProps } from '../../types';

export declare type BaseImageProps = {
  /** 表示する画像 */
  src: ImageProps['src'];
  /** 画像説明 */
  alt: string;
  /** 横幅 */
  width?: number;
  /** 高さ */
  height?: number;
} & BaseComponentProps;

export { default as DefaultImage } from './DefaultImage';
