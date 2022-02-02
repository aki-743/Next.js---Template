import React, { MouseEvent } from 'react';
import { BaseComponentProps } from '../../types';

export declare type BaseTabsProps = {
  /** 選択されているタブを示すバリュー */
  value?: string | number;
  /** 配置を中央にするか */
  centered?: boolean;
  /** タブが変更されたときのコールバック関数 */
  onChange?: (event: React.SyntheticEvent, value: any) => void;
  /** タブラベル */
  labels?: {
    /** テキスト */
    text?: React.ReactNode;
    /** HTMLタグ */
    component?: any;
    /** パス */
    href?: string;
    /** タブがクリックされたときのコールバック関数 */
    onClick?: (event: MouseEvent<HTMLAnchorElement | MouseEvent>) => void;
  }[];
} & BaseComponentProps;

export { default as ScrollableWithAllowButtonTabs } from './ScrollableWithAllowButtonTabs';
