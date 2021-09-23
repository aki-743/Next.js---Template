export type BaseColorProps = {
  /** カラー */
  color: string;
  /** カラーが変更されたときの関数 */
  onChange: (color: string) => void;
  /** なんのカラーを選択するかのラベル */
  colorLabel?: string;
};
