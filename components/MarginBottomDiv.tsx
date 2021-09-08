import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginBottom: '20px',
  },
});

const MarginBottomDiv: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.root} />;
};

export default MarginBottomDiv;
