import { BaseLinkProps } from '../types/link';
import Link from 'next/link';

const PathLink: React.FC<BaseLinkProps> = ({ label, href, replace, passHref }) => {
  return (
    <Link href={href} replace={replace} passHref={passHref}>
      <a className="text-link hover:underline">{label}</a>
    </Link>
  );
};

export default PathLink;
