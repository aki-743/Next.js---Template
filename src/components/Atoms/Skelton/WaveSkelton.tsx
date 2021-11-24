import { Skeleton } from '@mui/material';
import { BaseSkeltonProps } from '.';

const WaveSkelton = ({ width, height }: BaseSkeltonProps) => {
  return <Skeleton animation="wave" variant="text" width={width} height={height} />;
};

export default WaveSkelton;
