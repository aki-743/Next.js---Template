import axios from 'axios';

export const clientAxios = axios.create({
  baseURL: process.env.REST_API_ENDPOINT,
});

/** 関数名に対応したAPIのパス */
export const apiPaths = {
  'sfsp-admin-login': '/admin/login',
  'sfsp-admin-register-owner': '/admin/register-owner',
};
