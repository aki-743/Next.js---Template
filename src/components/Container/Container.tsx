import { Container, ContainerProps } from '@mui/material';

const TContainer: React.FC<ContainerProps> = ({ children, maxWidth }) => {
  return (
    <Container maxWidth={maxWidth || 'md'}>
      <>{children}</>
    </Container>
  );
};

export default TContainer;
