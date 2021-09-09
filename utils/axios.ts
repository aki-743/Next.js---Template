import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/users/defunkt',
});

api.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject({
      error: error.response,
    });
  },
);
