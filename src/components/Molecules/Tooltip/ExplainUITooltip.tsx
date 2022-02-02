import { BaseTooltipProps, DefaultTooltip } from '../../Atoms/Tooltip';
import { InformationIcon } from '../../Atoms/Icon';
import classNames from 'classnames';
import { forwardRef } from 'react';

const ExplainUITooltip = forwardRef<HTMLDivElement, BaseTooltipProps>(function render({ id, className, title }, ref) {
  return (
    <div id={id} className={classNames('inline-block align-top', className)} ref={ref}>
      <DefaultTooltip title={title} arrow={true}>
        <InformationIcon size={20} />
      </DefaultTooltip>
    </div>
  );
});

export default ExplainUITooltip;
