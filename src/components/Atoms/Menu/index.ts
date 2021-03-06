import React from 'react';
import { BaseComponentProps } from '../../types';

export type Menu = {
  label: React.ReactNode;
  onClick: () => void;
};

export type Menus = Menu[];

export declare type BaseMenuProps = {
  /** メニューを表示する要素 */
  anchorEl: null | HTMLElement;
  /** メニューを閉じる関数 */
  handleClose: () => void;
  /** 表示するメニューの配列 */
  menus: Menus;
} & BaseComponentProps;

export { default as DefaultMenu } from './DefaultMenu';
