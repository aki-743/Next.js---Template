import { makeStyles, Modal, Theme, createStyles } from "@material-ui/core";
import { Search } from "@trejgun/material-ui-icons-google";
import { ChangeEvent, useState } from "react";
import {
    CustomButton,
    CustomDivider,
    CustomImage,
    CustomLink,
    Layout,
    MarginBottomDiv,
    TextInput,
} from "../components";
import Logo from "../assets/images/logo.jpeg";
import { Facebook } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "#fff",
            width: "600px",
            padding: "20px",
            [theme.breakpoints.down("sm")]: {
                width: "90%",
            },
        },
    }),
);

const Signin: React.FC = () => {
    const classes = useStyles();
    const [username, setUsername] = useState(""),
        [password, setPassword] = useState("");

    // TextInputが変更されたときのコールバック関数
    const inputUsername = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const inputPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const signin = async () => {
        console.log("サインイン");
    };

    const signinWithGoogle = async () => {
        console.log("googleでサインイン");
    };

    const signinWithFacebook = async () => {
        console.log("a");
    };

    return (
        <Layout footerRequired={false} headerRequired={false} subTitle="サインイン">
            <Modal
                className="flex align-center justify-center"
                open={true}
                aria-labelledby="サインイン画面"
                aria-describedby="メールアドレス・パスワード、Googleでサインイン出来る"
            >
                <div className={classes.root}>
                    <CustomImage src={Logo} alt="narite logo" width={100} height={100} />
                    <CustomDivider />
                    <TextInput label="ユーザー名" value={username} fullWidth={true} onChange={inputUsername} />
                    <br />
                    <TextInput
                        label="パスワード"
                        value={password}
                        fullWidth={true}
                        type="password"
                        onChange={inputPassword}
                    />
                    <CustomButton label="サインイン" color="main" fullWidth={true} onClick={signin} />
                    <MarginBottomDiv />
                    <CustomLink label="会員登録はこちらから" path="/signup" />
                    <CustomDivider />
                    <CustomButton
                        label="Googleでサインイン"
                        color="google"
                        fullWidth={true}
                        startIcon={<Search />}
                        onClick={signinWithGoogle}
                    />
                    <MarginBottomDiv />
                    <CustomButton
                        label="Faceobookでサインイン"
                        color="facebook"
                        fullWidth={true}
                        startIcon={<Facebook />}
                        onClick={signinWithFacebook}
                    />
                </div>
            </Modal>
        </Layout>
    );
};

export default Signin;
