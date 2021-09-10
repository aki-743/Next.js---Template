import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { CustomContainer } from '.';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: '#fff',
      backgroundColor: theme.palette.secondary.dark,
    },
  }),
);

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <CustomContainer>
        <div className="py-3 flex justify-between">
          <div>
            <h4>{process.env.TITLE}</h4>
          </div>
          <div></div>
        </div>
      </CustomContainer>
    </footer>
  );
};

export default Footer;
