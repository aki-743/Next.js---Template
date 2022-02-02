import { Card, CardContent } from '@mui/material';
import { forwardRef, PropsWithChildren } from 'react';
import { BaseCardProps } from '.';

const DefaultCard = forwardRef<HTMLDivElement, PropsWithChildren<BaseCardProps>>(function render({ children, className }, ref) {
  return (
    <Card className={className} ref={ref}>
      <CardContent>{children}</CardContent>
    </Card>
  );
});

export default DefaultCard;
