import { makeStyles, Step, StepLabel, Stepper } from "@material-ui/core";
import { Facebook } from "@material-ui/icons";
import { Search } from "@trejgun/material-ui-icons-google";
import { ChangeEvent, useState } from "react";
import { CustomButton, CustomDivider, Layout, MarginBottomDiv, TextInput } from "../components";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#fff",
        padding: "20px"
    }
})

const Signup: React.FC = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0),
        [email, setEmail] = useState(""),
        [password1, setPassword1] = useState(""),
        [password2, setPassword2] = useState("");

    // TextInputが変更されたときのコールバック関数
    const inputEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const inputPassword1 = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword1(event.target.value);
    };

    const inputPassword2 = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword2(event.target.value);
    };

    const signUp = async () => {
        console.log("a")
    }

    const signinWithGoogle = async () => {
        console.log("googleでサインイン");
    };

    const signinWithFacebook = async () => {
        console.log("a");
    };

    return (
        <Layout containerMaxWidth="sm" subTitle="会員登録">
            <div className={classes.root}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    <Step>
                        <StepLabel>ログイン情報の入力</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>クレジットカードの登録</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>登録完了</StepLabel>
                    </Step>
                </Stepper>
                <div>
                    <h3 className="text-center">SNSアカウントでかんたんログイン！</h3>
                    <MarginBottomDiv />
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
                <CustomDivider />
                <TextInput label="メールアドレス" value={email} fullWidth={true} onChange={inputEmail} />
                <br />
                <TextInput
                    label="パスワード"
                    value={password1}
                    fullWidth={true}
                    type="password"
                    onChange={inputPassword1}
                />
                <TextInput
                    label="パスワード（確認用）"
                    value={password2}
                    fullWidth={true}
                    type="password"
                    onChange={inputPassword2}
                />
                <CustomButton label="会員登録" color="main" fullWidth={true} onClick={signUp} />
                <MarginBottomDiv />
            </div>
        </Layout>
    );
};

export default Signup;
