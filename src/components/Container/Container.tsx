import { Container, ContainerProps } from '@material-ui/core';

const TContainer: React.FC<ContainerProps> = ({ children, maxWidth }) => {
  return (
    <Container maxWidth={maxWidth || 'md'}>
      <>{children}</>
    </Container>
  );
};

export default TContainer;
