import { ChangeEvent, ReactNode } from 'react';
import { ButtonSize } from '..';

export declare type NoHeadTableProps = {
  /** テーブルの横幅 */
  width?: string;
  /** テーブルの右に表示するデータ */
  rows?: { label: string; value: string }[];
};

export declare type ListTableProps = {
  /** テーブルのヘッド */
  heads: string[];
  /** 非同期で取得したデータ */
  data: any[];
};

export declare type AsyncListTableProps = {
  /** テーブルのヘッド */
  heads: string[];
  /** 非同期で取得したデータ */
  data: any[];
  /** ローディングの状態 */
  isLoading: boolean;
  /** エラーの状態 */
  isError: boolean;
};

export declare type ProductTableProps = {
  /** 非同期で取得したデータ */
  data?: any[];
  /** ローディングの状態 */
  isLoading?: boolean;
  /** エラーの状態 */
  isError?: boolean;
  /** SearchBoxのname */
  name?: string;
  /** SearchBoxのvalue */
  value?: string;
  /** SearchBoxのvalueが変更された時の関数 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /** ボタンのラベル */
  label?: string;
  /** ボタンのtype */
  type?: 'submit' | 'reset' | 'button';
  /** ボタンのサイズ */
  size?: ButtonSize;
  /** ボタンに表示するアイコン */
  startIcon?: ReactNode;
  /** ボタンがクリックされたときに実行する関数 */
  onClick?: () => void;
};

export { default as NoHeadTable } from './NoHeadTable';
