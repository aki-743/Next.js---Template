import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.writeHead(302, { Location: '/signin' });
  res.end();

  return {
    props: {},
  };
};

const IndexPage: React.FC = () => {
  return <></>;
};

export default IndexPage;
