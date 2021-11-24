import axios from 'axios';
import * as yup from 'yup';
import { useDay } from '../day/day';

/** メールアドレスのバリデーション */
export const useYupEmail = () => {
  return yup
    .string()
    .email('メールアドレスの形式が正しくありません')
    .max(100, 'メールアドレスは１００文字以内です')
    .required('メールアドレスを入力して下さい');
};

/** パスワードのバリデーション */
export const useYupPassword = () => {
  return yup
    .string()
    .required('パスワードを入力して下さい')
    .matches(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[\^$*.\[\]{}()?"!@#%&\/\\,><':;|_~`]){12,64}/, 'パスワードの条件を満たしていません');
};

/** 確認用パスワードのバリデーション */
export const useYupConfirmPassword = () => {
  return yup
    .string()
    .required('確認用パスワードを入力して下さい')
    .test({
      test: function () {
        const { password, confirm_password } = this.parent;
        if (password && confirm_password !== password) {
          return false;
        }
        return true;
      },
      message: 'パスワードが一致していません',
    });
};

/** ビジネス名（英語表記）のバリデーション */
export const useYupBusinessNameEnglish = () => {
  return yup
    .string()
    .min(3, '３文字以上入力して下さい')
    .max(20, '２０文字以下にして下さい')
    .required('ビジネス名を入力して下さい')
    .matches(/^[a-zA-Z][0-9a-zA-Z\-_]*$/, 'ビジネス名の条件を満たしていません')
    .test('business_name_english', '既に存在しているビジネス名です', async (business_name_english) => {
      // ビジネス名が存在しているかの確認
      const { data } = await axios.get('/api/owners/business_name_english', {
        params: {
          business_name_english,
        },
      });
      if (data.is_existing) {
        return false;
      }

      return true;
    });
};

/** 同意チェックボックスのバリデーション */
export const useYupAgree = () => {
  return yup.bool().oneOf([true], '利用規約・プライバシーポリシーに同意の上チェックして下さい');
};

/** 会員登録・サインイン時の確認コードのバリデーション */
export const useYupVerificationCode = () => {
  return yup.string().test('identification_code', '認証コードは６桁で入力してください', (value) => {
    if (value.length !== 6) {
      return false;
    }

    return true;
  });
};

/** 電話番号のバリデーション */
export const useYupTel = () => {
  return yup
    .string()
    .required('電話番号を入力して下さい')
    .matches(/^0[789]0[0-9]{4}[0-9]{4}$/, '正しい携帯電話番号を入力して下さい');
};

/** 商品名のバリデーション */
export const useYupProductName = () => {
  return yup.string().max(100, '商品名は１００文字以下にしてください').required('商品名を入力して下さい');
};

/** 商品画像のバリデーション */
export const useYupProductImage = () => {
  return yup
    .mixed()
    .test('productImageSize', 'ファイルのサイズは1.6MB以下にしてください', (value) => {
      return value && value[0].size <= 1000;
    })
    .test('productImageType', 'ファイルのタイプはpngまたはjpgにしてください', (value) => {
      return value && (value[0].type === 'image/jpeg' || value[0].type === 'image/png');
    });
};

/** 商品説明のバリデーション */
export const useYupProductDescription = () => {
  return yup.string().max(100, '商品説明は１００文字以下にしてください').required('商品説明を入力して下さい');
};

/** 商品の値段のバリデーション */
export const useYupProductPrice = () => {
  return yup
    .string()
    .max(10, '商品の値段は１０桁以下にしてください')
    .required('商品の値段を入力して下さい')
    .matches(/^[0-9]*$/, '商品の値段は半角数字のみにしてください');
};

/** サブスクリプションの期間のバリデーション */
export const useYupProductPeriod = () => {
  return yup
    .string()
    .max(100, 'サブスクリプションの期間は１００文字以下にしてください')
    .required('サブスクリプションの期間を入力して下さい')
    .matches(/(month|week)/, 'サブスクリプションの期間は一ヶ月または週次で入力してください');
};

/** 商品の順番のバリデーション */
export const useYupProductOrder = () => {
  return yup.number().required('商品の順番を入力して下さい');
};

/** ビジネスタイプのバリデーション */
export const useYupBuisinessType = () => {
  return yup
    .string()
    .required('ビジネスタイプを選択して下さい')
    .matches(/(individual)/, 'ビジネスタイプは個人事業主を選択して下さい');
};

/** 姓のバリデーション */
export const useYupFirstNameKanji = () => {
  return yup
    .string()
    .required('姓を入力して下さい')
    .matches(/[ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠ー]/, '姓は全角でご入力下さい');
};

/** 名のバリデーション */
export const useYupLastNameKanji = () => {
  return yup
    .string()
    .required('名を入力して下さい')
    .matches(/[ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠ー]/, '姓は全角でご入力下さい');
};

/** セイのバリデーション */
export const useYupFirstNameKana = () => {
  return yup
    .string()
    .required('セイを入力して下さい')
    .matches(/[ァ-ヶｱ-ﾝ]/, 'セイは全角カナでご入力下さい');
};

/** メイのバリデーション */
export const useYupLastNameKana = () => {
  return yup
    .string()
    .required('メイを入力して下さい')
    .matches(/[ァ-ヶｱ-ﾝ]/, 'メイは全角カナでご入力下さい');
};

/** 生年月日のバリデーション */
export const useYupBirthDate = () => {
  return yup
    .date()
    .required('生年月日を入力して下さい')
    .typeError('生年月日を正しく入力してください')
    .test('birth_date', '１３以上のみご利用いただけます', (value: Date) => {
      const now = useDay();
      const thisYearbirthDate = useDay(new Date(now.year(), value.getMonth(), value.getDate()));
      const age = now.subtract(value.getFullYear(), 'year').year();
      return age >= 13 && now >= thisYearbirthDate ? true : false;
    });
};

/** 都道府県・市区町村・町名のバリデーション */
export const useYupStateCityTown = () => {
  return yup
    .object()
    .nullable()
    .shape({
      title: yup.string().required('都道府県・市区町村・町名を入力してください'),
      label: yup.string().required('都道府県・市区町村・町名を入力してください'),
      state: yup.string().required('都道府県を入力してください'),
      city: yup.string().required('市区町村を入力してください'),
      town: yup.string().required('町名を入力してください'),
      postal: yup.string().required('郵便番号を入力してください'),
    });
};

/** 番地のバリデーション */
export const useYupTownNumber = () => {
  return yup
    .string()
    .required('番地を入力してください')
    .matches(/[0-9０-９-ー番号]$/, '番地を正しく入力してください');
};

/** 建物・部屋番号のバリデーション */
export const useYupBuildingsAndRoomsNumber = () => {
  return yup.string();
};

/** ウェブサイトのバリデーション */
export const useYupWebSite = () => {
  return yup
    .string()
    .required('ウェbサイトを入力してください')
    .matches(/https?:\/\/[\w!\?/\+\-_~=;\.,\*&@#\$%\(\)'\[\]]+/, 'ウェブサイトを正しく入力してください');
};

/** ビジネス詳細のバリデーション */
export const useYupBusinessDetails = () => {
  return yup.string().required('ビジネス詳細を入力してください').max(300, 'ビジネス詳細は３００文字以下にしてください');
};

/** 銀行コードのバリデーション */
export const useYupBankCode = () => {
  return yup
    .object()
    .nullable()
    .shape({
      title: yup.string().required('銀行を選択してください'),
      label: yup
        .string()
        .required('銀行コードを選択してください')
        .min(4, '銀行コードは４桁で入力してください')
        .max(4, '銀行コードは４桁で入力してください'),
    });
};

/** 支店コードのバリデーション */
export const useYupBranchCode = () => {
  return yup
    .object()
    .nullable()
    .shape({
      title: yup.string().required('支店を選択してください'),
      label: yup
        .string()
        .required('支店コードを選択してください')
        .min(3, '支店コードは３桁で入力してください')
        .max(3, '支店コードは３桁で入力してください'),
    });
};

/** 口座番号のバリデーション */
export const useYupAccountNumber = () => {
  return yup
    .string()
    .required('口座番号を入力してください')
    .matches(/^[0-9]{5,8}$/, '口座番号を正しく入力してください');
};

/** 口座名義のバリデーション */
export const useYupAccountHolderName = () => {
  return yup
    .string()
    .required('口座名義を入力してください')
    .matches(/^[ァ-ヴｦ-ﾟ-ー]*$/, '口座名義を正しく入力してください');
};

/** 本人確認書類のバリデーション */
export const useYupIdentityVerificationDocument = () => {
  return yup.string().required('本人確認書類をアップロードしてください');
};
