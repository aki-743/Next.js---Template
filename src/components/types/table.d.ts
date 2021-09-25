import { PostData } from '../../api/types/async';

export type NoHeadTableProps = {
  /** テーブルの横幅 */
  width?: string;
  /** テーブルの右に表示するデータ */
  rows?: PostData[];
};

export type ListTableProps = {
  /** テーブルのヘッド */
  heads: string[];
  /** 非同期で取得したデータ */
  data: any[];
};

export type AsyncListTableProps = {
  /** テーブルのヘッド */
  heads: string[];
  /** 非同期で取得したデータ */
  data: any[];
  /** ローディングの状態 */
  isLoading: boolean;
  /** エラーの状態 */
  isError: boolean;
};
