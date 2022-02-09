import { Card, CardContent } from '@mui/material';
import { forwardRef, PropsWithChildren } from 'react';
import { BaseCardProps } from '.';

const DefaultCard = forwardRef<HTMLDivElement, PropsWithChildren<BaseCardProps>>(function render({ children, id, className }, ref) {
  return (
    <Card id={id} className={className} ref={ref}>
      <CardContent>{children}</CardContent>
    </Card>
  );
});

export default DefaultCard;
