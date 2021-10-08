const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-main-dark">
      <div className="flex justify-between py-3">
        <div>
          <h4>{process.env.TITLE}</h4>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
