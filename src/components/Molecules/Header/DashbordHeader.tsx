import { useRouter } from 'next/dist/client/router';
import { MouseEvent, useState } from 'react';
import { EdgeAppBar } from '../../Atoms/AppBar';
import { UserCircleIcon } from '../../Atoms/Icon';
import { DefaultIconButton } from '../../Atoms/IconButton';
import { DefaultMenu, Menus } from '../../Atoms/Menu';
import styles from './DashbordHeader.module.scss';

const DashbordHeader: React.FC = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const onClickSignOut = async () => {
    window.location.href = '/signin';
  };

  const onClickProfile = () => {
    handleMenuClose();
    router.push('/dashbord/profile');
  };

  const onClickDashboard = () => {
    handleMenuClose();
    router.push('/dashbord');
  };

  const menus: Menus = [
    { label: 'プロフィール', onClick: onClickProfile },
    { label: 'ダッシュボード', onClick: onClickDashboard },
    { label: 'サインアウト', onClick: onClickSignOut },
  ];

  return (
    <div className={styles.root}>
      <EdgeAppBar>
        <div></div>
        <div>
          <DefaultIconButton onClick={handleMenuOpen}>
            <UserCircleIcon size={28} />
          </DefaultIconButton>
        </div>
        <DefaultMenu anchorEl={anchorEl} handleClose={handleMenuClose} menus={menus} />
      </EdgeAppBar>
    </div>
  );
};

export default DashbordHeader;
