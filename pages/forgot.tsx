import { CustomButton, CustomDivider, CustomImage, Layout, TextInput } from '../components';
import Logo from '../assets/images/logo.jpeg';
import { ChangeEvent, useState } from 'react';

const Forgot: React.FC = () => {
    const [email, setEmail] = useState('');

    // TextInputが変更されたときのコールバック関数
    const inputEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const sendMailForPassowrd = async () => {
        return;
    };

    return (
        <Layout containerMaxWidth="sm" subTitle="パスワードを忘れた方">
            <CustomImage src={Logo} alt="narite logo" width={100} height={100} />
            <CustomDivider />
            <h3 className="text-center">パスワードの再設定</h3>
            <p className="text-center mb-[20px]">ご登録いただいたメールアドレス宛にパスワード再設定用のアドレスを送信します</p>
            <TextInput label="メールアドレス" value={email} fullWidth={true} type={'email'} onChange={inputEmail} />
            <CustomButton className="mb-[20px]" label="メールを送信する" color="main" fullWidth={true} onClick={sendMailForPassowrd} />
        </Layout>
    );
};

export default Forgot;
