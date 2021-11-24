import { ChangeEvent } from 'react';

export declare type SearchBoxProps = {
  /** id */
  id?: string;
  /** name */
  name?: string;
  /** searchboxのバリュー */
  value: string;
  /** Widthをフルにするか */
  fullWidth?: boolean;
  /** disabled */
  disabled?: boolean;
  /** バリューが変更されたときの関数 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export { default as SearchBox } from './SearchBox';
