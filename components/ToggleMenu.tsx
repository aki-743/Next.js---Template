import { makeStyles, Menu, MenuItem } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        "& > .MuiMenu-paper": {
            top: "50px !important",
        },
    },
});

type Props = {
    anchorEl: null | HTMLElement;
    handleClose: () => void;
    menus: Array<{ label: string; onClick: () => void }>;
};

const Togglemenu: React.FC<Props> = ({ anchorEl, handleClose, menus }) => {
    const classes = useStyles();

    return (
        <Menu className={classes.root} anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            {menus.map((menu) => (
                <MenuItem key={menu.label} onClick={menu.onClick}>
                    {menu.label}
                </MenuItem>
            ))}
        </Menu>
    );
};

export default Togglemenu;
