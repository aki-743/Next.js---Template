import { Tooltip } from '@mui/material';
import { forwardRef, PropsWithChildren } from 'react';
import { BaseTooltipProps } from '.';

const DefaultTooltip = forwardRef<HTMLDivElement, PropsWithChildren<BaseTooltipProps>>(function render(
  { children, id, className, title, arrow },
  ref,
) {
  return (
    <Tooltip id={id} className={className} ref={ref} title={title} arrow={arrow}>
      <div>{children}</div>
    </Tooltip>
  );
});

export default DefaultTooltip;
