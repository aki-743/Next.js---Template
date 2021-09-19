import { makeStyles } from '@material-ui/core';
import { BaseLinkProps } from './type';
import Link from 'next/link';

const useStyles = makeStyles({
  root: {
    color: '#0366d6',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const PathLink: React.FC<BaseLinkProps> = ({ label, path, className }) => {
  const classes = useStyles();

  return (
    <div className={`mb-[5px] ${className}`}>
      <Link href={path}>
        <a className={classes.root}>{label}</a>
      </Link>
    </div>
  );
};

export default PathLink;
