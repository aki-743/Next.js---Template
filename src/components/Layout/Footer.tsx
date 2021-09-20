import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { Container } from '../Container';

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
      <Container>
        <div className="py-3 flex justify-between">
          <div>
            <h4>{process.env.TITLE}</h4>
          </div>
          <div></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
