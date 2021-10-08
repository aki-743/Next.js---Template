import { MouseEvent } from 'react';
import { AnchorLinkProps } from '../../types/Link/props';
import styles from './Link.module.scss';

const AnchorLink: React.FC<AnchorLinkProps> = ({ label, href = '#', onClick }) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    onClick();
  };

  return (
    <a className={styles.root} href={href} onClick={handleClick}>
      {label}
    </a>
  );
};

export default AnchorLink;
