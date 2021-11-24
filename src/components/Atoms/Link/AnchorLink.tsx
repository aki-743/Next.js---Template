import { MouseEvent } from 'react';
import { AnchorLinkProps } from '.';
import styles from './Link.module.scss';

const AnchorLink: React.FC<AnchorLinkProps> = ({ label, href = '#', onClick }) => {
  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    await onClick();
  };

  return (
    <a className={styles.root} href={href} onClick={handleClick}>
      {label}
    </a>
  );
};

export default AnchorLink;
