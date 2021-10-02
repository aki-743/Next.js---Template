import { MouseEvent } from 'react';
import { AnchorLinkProps } from '../types/link';

const AnchorLink: React.FC<AnchorLinkProps> = ({ label, href, onClick }) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    onClick();
  };

  return (
    <a className="text-link hover:underline hover:cursor-pointer" href={href} onClick={handleClick}>
      {label}
    </a>
  );
};

export default AnchorLink;
