import { BaseLinkProps } from '.';
import Link from 'next/link';
import classNames from 'classnames';
import { forwardRef } from 'react';

const PathLink = forwardRef<HTMLAnchorElement, BaseLinkProps>(function render({ className, label, href = '#', replace, passHref }, ref) {
  return (
    <Link href={href} replace={replace} passHref={passHref}>
      <a className={classNames('text-link cursor-pointer hover:underline', className)} ref={ref}>
        {label}
      </a>
    </Link>
  );
});

export default PathLink;
