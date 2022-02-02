import { BaseComponentProps } from '../../types';

export declare type NoHeadTableProps = {
  /** テーブルの横幅 */
  width?: string;
  /** テーブルの右に表示するデータ */
  rows?: { label: string; value: string }[];
} & BaseComponentProps;

export declare type ListTableProps = {
  /** テーブルのヘッド */
  heads: string[];
  /** 非同期で取得したデータ */
  data: any[];
};

export { default as NoHeadTable } from './NoHeadTable';
