import { PhoneInputProps } from 'react-phone-input-2';

export declare type BasePhoneInputProps = {
  /** マウント時に表示する国 */
  defaultCountry?: string;
  /** 国・電話番号のバリューが変更されたときの関数 */
  onChange: PhoneInputProps['onChange'];
};
