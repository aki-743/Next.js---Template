import { AutocompleteRenderInputParams } from '@mui/material';
import { ChangeEvent } from 'react';
import { FieldErrors } from 'react-hook-form';
import { AutocompleteOption, BaseAutocompleteProps } from '../Input';

export declare type BaseSelectProps = {
  /** id */
  id?: string;
  /** name */
  name?: string;
  /** openの状態 */
  open?: boolean;
  /** リストを表示させる関数 */
  onOpen?: () => void;
  /** リストを非表示させる関数 */
  onClose?: () => void;
  /** ラベル */
  label?: string;
  /** ラベルのid */
  labelId?: string;
  /** selectのバリュー */
  value: string | number;
  /** selectの要素 */
  elements?: { [key: string | number]: string | number };
  /** Widthをフルにするか */
  fullWidth?: boolean;
  /** disabled */
  disabled?: boolean;
  /** ツールチップに表示するテキスト */
  tooltipTitle?: string;
  /** ヘルパーテキスト */
  helperText?: React.ReactNode;
  /** バリデーションのエラー状態 */
  errors?: FieldErrors;
  /** バリューが変更されたときの関数 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export declare type SelectWithAutocompleteProps = {
  /** id */
  id?: string;
  /** name */
  name?: string;
  /** openの状態 */
  /** ラベル */
  label?: string;
  /** Autocompleteのバリュー */
  value: AutocompleteOption;
  /** placeholder */
  placeholder?: string;
  /** 候補 */
  options: ReadonlyArray<AutocompleteOption>;
  /** ラベルの表示 */
  getOptionLabel?: (option: AutocompleteOption) => string;
  /** 選択されている条件 */
  isOptionEqualToValue?: (option: AutocompleteOption, value: AutocompleteOption) => boolean;
  /** Autocompleteを適用するコンポーネント */
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
  /** filter */
  filterOptions?: any;
  /** Widthをフルにするか */
  fullWidth?: boolean;
  /** disabled */
  disabled?: boolean;
  /** ツールチップに表示するテキスト */
  tooltipTitle?: string;
  /** ヘルパーテキスト */
  helperText?: React.ReactNode;
  /** バリデーションのエラー状態 */
  errors?: FieldErrors;
  /** inputが変更されたときの関数 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /** Autocompleteが変更されたときの関数 */
  autocompleteChange: BaseAutocompleteProps['onChange'];
};

export declare type AsyncSelectProps = {
  /** id */
  id?: string;
  /** name */
  name?: string;
  /** ラベル */
  label?: string;
  /** ラベルのid */
  labelId?: string;
  /** selectのバリュー */
  value: string | number;
  /** selectの要素 */
  elements: { [key: string | number]: string | number };
  /** Widthをフルにするか */
  fullWidth?: boolean;
  /** disabled */
  disabled?: boolean;
  /** ツールチップに表示するテキスト */
  tooltipTitle?: string;
  /** ヘルパーテキスト */
  helperText?: React.ReactNode;
  /** バリデーションのエラー状態 */
  errors?: FieldErrors;
  /** バリューが変更されたときの関数 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export { default as DefaultSelect } from './DefaultSelect';
