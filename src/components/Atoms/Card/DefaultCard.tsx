import { Card, CardContent } from '@mui/material';

const DefaultCard: React.FC = ({ children }) => {
  return (
    <Card>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default DefaultCard;
