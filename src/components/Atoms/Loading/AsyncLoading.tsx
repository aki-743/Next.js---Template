import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import ReactLoading from 'react-loading';
import { BaseLoadingProps } from '.';

/** dispatch以外の非同期処理中のローディング */
const AsyncLoading = forwardRef<HTMLDivElement, BaseLoadingProps>(function render({ id, className }, ref) {
  return (
    <div id={id} className={classNames('flex flex-wrap justify-center items-center w-full p-24', className)} ref={ref}>
      <ReactLoading color="gray" type="bars" />
      <div className="text-center flex-100">
        <small>読み込み中</small>
      </div>
    </div>
  );
});

export default AsyncLoading;
