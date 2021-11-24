export declare type BasePopoverProps = {
  /** 表示・非表示状態 */
  open: boolean;
  /** anchorEl */
  anchorEl: null | Element | ((element: Element) => Element);
  /** 横幅 */
  width?: number;
  /** 非表示にするコールバック関数 */
  onClose: () => void;
};

export { default as BottomPopover } from './BottomPopover';
