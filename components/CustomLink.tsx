import { makeStyles } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles({
    root: {
        color: "#0366d6",
    },
});

type Props = {
    label: string;
    path: string;
};

const CustomLink: React.FC<Props> = ({ label, path }) => {
    const classes = useStyles();

    return (
        <Link href={path}>
            <a className={classes.root}>{label}</a>
        </Link>
    );
};

export default CustomLink;
