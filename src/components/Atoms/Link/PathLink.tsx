import { BaseLinkProps } from '.';
import Link from 'next/link';
import styles from './Link.module.scss';

const PathLink: React.FC<BaseLinkProps> = ({ label, href = '#', replace, passHref }) => {
  return (
    <Link href={href} replace={replace} passHref={passHref}>
      <a className={styles.root}>{label}</a>
    </Link>
  );
};

export default PathLink;
