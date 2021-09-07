import axios from "axios";
import { userSlice } from ".";
import { AppDispatch } from "..";
import { checkValueFormat } from "../../common/validate";
import { PostData } from "../../interfaces";
import { loadingSlice } from "../loading";

axios.defaults.baseURL = process.env.REST_API_ENDPOINT;

/** APIレスポンスの型定義 */
type APIResponse = {
    isBased64aEncoded: boolean;
    /** ステータスコード（200,400,401,500） */
    statusCode: number;
    /** タイプ（OK,Key Error,Unauthorized） */
    type: string;
    body: {
        /** バイナリー（0なら成功、1ならエラー） */
        code: 0 | 1;
        /** 返すデータ */
        data, any;
        /** メッセージ */
        message: string;
    }
};

/****************************************************************/
/** dispatchにおけるエラーハンドリング */
/****************************************************************/

const errorHandlingDispatch = (error) => {
    console.error('dispatch error:', error)
    console.error('error type:', error.type)
    console.error('error message:', error.message)

    switch (error.type) {
        case 'validate':
            alert(error.message)
            break
        default:
            break;
    }
}

/****************************************************************/
/** 非同期処理におけるエラーハンドリング */
/****************************************************************/

const errorHandling400 = (type: string) => {
    switch (type) {
        case 'Key Error':
            alert('リクエストに失敗しました。担当者に直接お問い合わせください。エラーコード：400');
            break;
        default:
            alert('予期せぬエラーが発生しました。時間をおいてから再度お試しください。')
            break;
    }
}

const errorHandling401 = (type: string) => {
    switch (type) {
        case 'Unauthorized':
            alert('ログイン情報が間違っています');
            break;
        default:
            alert('予期せぬエラーが発生しました。時間をおいてから再度お試しください。')
            break;
    }
}

/** Lambdaのエラーハンドリング */
const lambdaErrorHandling = (errorRes: APIResponse) => {
    const statusCode = errorRes.statusCode;
    const type = errorRes.type;
    switch (statusCode) {
        case 400:
            errorHandling400(type)
            break;
        case 401:
            errorHandling401(type);
            break;
    }
}

/****************************************************************/
/** 関数名に対応するリクエスト */
/****************************************************************/

/** 関数名に対応したAPIのパス */
const apiPaths = {
    'sfsp-admin-login': '/admin/login',
    'sfsp-admin-register-owner': '/admin/register-owner',
}

/**
 * REST-API の POST メソッドを実行する
 *
 * @param {Object} postData APIで渡すデータ
 * @param {string} functionKey　呼び出す関数名
 */

type RequestAdminApi = (postData: PostData, functionName: string) => Promise<APIResponse | null>;

const requestAdminApi: RequestAdminApi = async (postData, functionName) => {
    // 文字数制限やタイプが間違っていないか
    checkValueFormat(postData)
    return await axios.post(`${apiPaths[functionName]}`, {
        ...postData,
        env: process.env.USER_BRANCH
    })
        .then((res) => {
            const data = res.data;
            if (data.body.code === 0) {
                return data;
            } else {
                lambdaErrorHandling(data);
                return null;
            }
        })
        .catch((error) => {
            throw error;
        })
}

/****************************************************************/
/** ログイン */
/****************************************************************/

/**
 * 管理者のパスワードが一致しているかの確認
 *
 * @param {string} passowrd1 管理者パスワード１
 * @param {string} password2 管理者パスワード２
 */

type AdminLogin = (password1: string, passoword2: string) => (dispatch: AppDispatch) => Promise<void>;

export const adminLogin: AdminLogin = (password1, passsword2) => async (dispatch) => {
    try {
        dispatch(loadingSlice.actions.open())
        const postData = {
            'admin_password1': password1,
            'admin_password2': passsword2
        };
        const res = await requestAdminApi(postData, 'sfsp-admin-login');
        if (res) {
            // dispatch(userSlice.actions.login({ ...postData }))
        }
    } catch (error) {
        errorHandlingDispatch(error)
    } finally {
        dispatch(loadingSlice.actions.close())
    }
}