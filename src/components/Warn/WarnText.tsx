import { BaseWarnTextProps } from './type';

const WarnText: React.FC<BaseWarnTextProps> = ({ message }) => {
  return (
    <p className="GB-alert" role="alert">
      {message}
    </p>
  );
};

export default WarnText;
