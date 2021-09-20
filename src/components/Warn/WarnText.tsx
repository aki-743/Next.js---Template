type Props = {
  label: string;
};

const WarnText: React.FC<Props> = ({ label }) => {
  return (
    <p className="GB-alert" role="alert">
      {label}
    </p>
  );
};

export default WarnText;
