import classNames from 'classnames';
import { forwardRef } from 'react';
import { GoAlert } from 'react-icons/go';
import { BaseErrorProps } from '.';

const AsyncError = forwardRef<HTMLDivElement, BaseErrorProps>(function render({ className }, ref) {
  return (
    <div className={classNames('p-24 text-48 flex items-center justify-center flex-wrap w-full', className)} ref={ref}>
      <GoAlert />
      <div className="text-center flex-100">
        <small>ネットワークエラーが発生しました</small>
      </div>
    </div>
  );
});

export default AsyncError;
