import { BaseComponentProps } from '../../types';

export declare type BaseDivProps = {
  /** クリックされたときに呼ばれるコールバック関数 */
  onClick?: (event: any) => void;
} & BaseComponentProps;

export { default as BlockDiv } from './BlockDiv';
export { default as InlineBlockDiv } from './InlineBlockDiv';
