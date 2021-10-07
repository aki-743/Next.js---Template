export declare type BaseCodeInputProps = {
  /** バリュー */
  value: string;
  /** 宛先 */
  address?: string;
  /** 認証名 */
  verificationName?: string;
  /** コードの長さ */
  fields?: number;
  /** バリューが変更されたときの関数 */
  onChange: (value: string) => void;
  /** 認証コードの確認を行う関数 */
  onComplete?: () => void;
};
