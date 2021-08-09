import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";
import { Alert } from "@material-ui/lab";
import { SnackbarSlice } from "../store/snackbar";
import { Snackbar } from "@material-ui/core";

const CustomSnackbar: React.FC = () => {
    const dispatch = useDispatch();
    const snackbar = useSelector((state: RootState) => state.snackbar);

    const handleClose = () => {
        dispatch(SnackbarSlice.actions.reset())
    };

    // レンダリング毎にスナックバーの状態をリセット
    useEffect(() => {
        dispatch(SnackbarSlice.actions.reset())
    }, [])

    return (
        <Snackbar open={snackbar.snackbar.open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
                {snackbar.snackbar.message}
            </Alert>
        </Snackbar>
    )
}

export default CustomSnackbar