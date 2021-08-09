import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import ReactLoading from "react-loading";
import { loadingSlice } from "../store/loading";
import { useEffect } from "react";
import { Modal } from "@material-ui/core";

const CustomLoading: React.FC = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state: RootState) => state.loading);

    // レンダリング毎にローディングの状態をリセット
    useEffect(() => {
        dispatch(loadingSlice.actions.reset());
    }, [])

    return (
        <Modal
            className="flex items-center justify-center"
            open={loading.loading.open}
            aria-labelledby="loading"
            disableEnforceFocus
        >
            <ReactLoading type="spinningBubbles" />
        </Modal>
    )
}

export default CustomLoading