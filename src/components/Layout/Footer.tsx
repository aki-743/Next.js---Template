import { Container } from '../Container';

const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-main-dark">
      <Container>
        <div className="py-3 flex justify-between">
          <div>
            <h4>{process.env.TITLE}</h4>
          </div>
          <div></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
