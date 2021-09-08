import { Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        margin: '20px 0',
    },
});

const CustomDivider: React.FC = () => {
    const classes = useStyles();

    return <Divider className={classes.root} />;
};

export default CustomDivider;
