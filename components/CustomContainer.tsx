import { Container, ContainerProps } from '@material-ui/core';

const CustomContainer: React.FC<ContainerProps> = ({ children, maxWidth }) => {
    return (
        <Container maxWidth={maxWidth || 'md'}>
            <>{children}</>
        </Container>
    );
};

export default CustomContainer;
