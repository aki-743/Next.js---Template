import { MouseEvent } from 'react';

export declare type BasePreviewProps = {
  /** 表示する画像 */
  src: StaticImageData;
  /** 画像説明 */
  alt: string;
  /** 横幅 */
  width?: number;
  /** 高さ */
  height?: number;
  /** プレビューに付属するアイコンがクリックされたときの関数 */
  onClick: (e: MouseEvent<HTMLElement>) => void;
};

export { default as DefaultPreview } from './DefaultPreview';
