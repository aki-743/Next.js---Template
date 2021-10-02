import { DividerWithText } from '../components/Divider';
import { DefaultLayout } from '../components/Layout';
import { PathLink } from '../components/Link';

const IndexPage: React.FC = () => {
  return (
    <DefaultLayout subTitle="ホーム">
      あああああああああああああ
      <PathLink label="あいうえお" href="/signin" />
      ああああああああああああああ
      <DividerWithText text="aaaa" />
    </DefaultLayout>
  );
};

export default IndexPage;
