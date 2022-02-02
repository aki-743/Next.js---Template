import classNames from 'classnames';
import { forwardRef, MouseEvent } from 'react';
import { AnchorLinkProps } from '.';

const AnchorLink = forwardRef<HTMLAnchorElement, AnchorLinkProps>(function render({ id, className, label, href = '#', onClick }, ref) {
  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    await onClick();
  };

  return (
    <a id={id} className={classNames('text-link cursor-pointer hover:underline', className)} ref={ref} href={href} onClick={handleClick}>
      {label}
    </a>
  );
});

export default AnchorLink;
