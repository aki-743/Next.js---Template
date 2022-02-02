import { DefaultImage } from '../../Atoms/Image';
import Logo from '../../../assets/logo/db-RegisterAndLoginLogo.png';
import { forwardRef } from 'react';
import classNames from 'classnames';
import { BaseLogoProps } from '.';

const SignUpAndSignInLogo = forwardRef<HTMLDivElement, BaseLogoProps>(function render({ id, className }, ref) {
  return (
    <div id={id} className={classNames('pl-24 pb-40', className)} ref={ref}>
      <DefaultImage src={Logo} alt="SFSPロゴ" />
    </div>
  );
});

export default SignUpAndSignInLogo;
