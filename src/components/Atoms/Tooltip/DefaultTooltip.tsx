import { Tooltip } from '@mui/material';
import { BaseTooltipProps } from '.';

const DefaultTooltip: React.FC<BaseTooltipProps> = ({ children, title, arrow }) => {
  return (
    <Tooltip title={title} arrow={arrow}>
      <div>{children}</div>
    </Tooltip>
  );
};

export default DefaultTooltip;
