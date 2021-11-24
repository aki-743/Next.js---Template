import { Chip } from '@mui/material';
import { BaseChipProps } from '.';

const DefaultChip: React.FC<BaseChipProps> = ({ label, color }) => {
  return <Chip label={label} color={color} />;
};

export default DefaultChip;
