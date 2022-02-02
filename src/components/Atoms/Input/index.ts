import { AutocompleteRenderInputParams, InputBaseComponentProps, InputLabelProps, OutlinedInputProps } from '@mui/material';
import { ChangeEvent, MouseEvent } from 'react';
import { FieldErrors } from 'react-hook-form';
import { BaseComponentProps } from '../../types';
import { ButtonSize } from '../Button';
import { BaseChipProps } from '../Chip';

export declare type BaseInputProps = {
  /** id */
  id?: string;
  /** ref */
  inputRef?: React.Ref<HTMLInputElement>;
  /** name */
  name?: string;
  /** ラベル */
  label?: string;
  /** inputのバリュー */
  value?: string;
  /** placeholder */
  placeholder?: string;
  /** Widthをフルにするか */
  fullWidth?: boolean;
  /** 自動入力させるプロパティ名 */
  autoComplete?: string;
  /** disabled */
  disabled?: boolean;
  /** 複数行にするか */
  multiline?: boolean;
  /** 最大 */
  maxLength?: number;
  /** inputProps */
  inputProps?: InputBaseComponentProps;
  /** InputProps */
  InputProps?: OutlinedInputProps;
  /** 常に表示するアイコンやテキスト（最初） */
  startAdornment?: React.ReactNode;
  /** 常に表示するアイコンやテキスト（最後） */
  endAdornment?: React.ReactNode;
  /** InputLableProps */
  InputLabelProps?: Partial<InputLabelProps>;
  /** 複数行にした場合の列数 */
  rows?: number;
  /** 文字数の制限 */
  limit?: number;
  /** ツールチップに表示するテキスト */
  tooltipTitle?: string;
  /** ヘルパーテキスト */
  helperText?: React.ReactNode;
  /** バリデーションのエラー状態 */
  errors?: FieldErrors;
  /** 編集モードの切替 */
  isEditing?: boolean;
  /** バリューが変更されたときの関数 */
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | string, data?: any) => void;
} & BaseComponentProps;

/** optionのオブジェクト */
export declare type AutocompleteOption = {
  title?: string;
  label?: string;
  [key: string]: string;
};

export declare type BaseAutocompleteProps = {
  /** 候補 */
  options: ReadonlyArray<AutocompleteOption>;
  /** グループ化 */
  groupBy?: (option: AutocompleteOption) => string;
  /** */
  value?: string;
  /** inputのバリュー */
  inputValue?: string;
  /** ラベルの表示 */
  getOptionLabel?: (option: AutocompleteOption) => string;
  /** 選択されている条件 */
  isOptionEqualToValue?: (option: AutocompleteOption, value: AutocompleteOption) => boolean;
  /** Autocompleteを適用するコンポーネント */
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
  /** filter */
  filterOptions?: any;
  /** 候補がない場合に表示するテキスト */
  noOptionsText?: React.ReactNode;
} & BaseInputProps;

export declare type BaseCodeInputProps = {
  /** バリュー */
  value?: string;
  /** 宛先 */
  address?: string;
  /** コードの長さ */
  fields?: number;
  /** ローディング */
  loading?: boolean;
  /** バリューが変更されたときの関数 */
  onChange?: (value: string) => void;
  /** 認証コードの確認を行う関数 */
  onComplete?: (value?: string) => Promise<void> | void;
} & BaseComponentProps;

export declare type BaseFileInputProps = {
  /** id */
  id?: string;
  /** name */
  name?: string;
  /** ref */
  inputRef?: React.Ref<HTMLInputElement>;
  /** ファイル形式 */
  accept?: string;
  /** value */
  value?: string;
  /** ラベル */
  label?: string;
  /** ボタンのラベル */
  buttonLabel?: string;
  /** Widthをフルにするか */
  fullWidth?: boolean;
  /** disabled */
  disabled?: boolean;
  /** ボタンのサイズ */
  size?: ButtonSize;
  /** プレビューのsrc */
  src?: StaticImageData;
  /** プレビューのalt */
  alt?: string;
  /** プレビューのwidth */
  width?: number;
  /** プレビューのheight */
  height?: number;
  /** ツールチップに表示するテキスト */
  tooltipTitle?: string;
  /** チップのラベル */
  chipLabel?: string;
  /** チップの色 */
  chipColor?: BaseChipProps['color'];
  /** ヘルパーテキスト */
  helperText?: React.ReactNode;
  /** バリデーションのエラー状態 */
  errors?: FieldErrors;
  /** バリューが変更されたときの関数 */
  onChange?: (e: ChangeEvent<HTMLInputElement> | string, data?: any) => void;
  /** プレビューに付属するアイコンがクリックされたときの関数 */
  onClick?: (e: MouseEvent<HTMLElement>) => void;
} & BaseComponentProps;

export { default as TextAutocomplete } from './Autocomplete/TextAutocomplete';
export { default as CodeInput } from './Code/CodeInput';
export { default as ColorInput } from './Color/ColorInput';
export { default as DateInput } from './Date/DateInput';
export { default as EmailInput } from './Email/EmailInput';
export { default as FileInput } from './File/FileInput';
export { default as HiddenInput } from './Hidden/HiddenInput';
export { default as PasswordInput } from './Password/PasswordInput';
export { default as TelInput } from './Tel/TelInput';
export { default as TextInput } from './Text/TextInput';
