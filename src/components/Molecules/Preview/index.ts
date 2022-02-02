import { MouseEvent } from 'react';
import { BaseComponentProps } from '../../types';

export declare type BasePreviewProps = {
  /** 表示する画像 */
  src?: StaticImageData;
  /** 画像説明 */
  alt?: string;
  /** 横幅 */
  width?: number;
  /** 高さ */
  height?: number;
  /** ファイルを取り消す関数 */
  onDelete?: (e: MouseEvent<HTMLElement>) => void;
} & BaseComponentProps;

export { default as DefaultPreview } from './DefaultPreview';
