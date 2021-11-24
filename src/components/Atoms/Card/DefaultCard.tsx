import { Card, CardContent } from '@mui/material';
import { BaseCardProps } from '.';

const DefaultCard: React.FC<BaseCardProps> = ({ children, className = '' }) => {
  return (
    <Card className={className}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default DefaultCard;
