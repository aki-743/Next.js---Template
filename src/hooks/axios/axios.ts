import axios from 'axios';
import Cookies from 'js-cookie';

export const useAxios = () => {
  return axios.create({
    baseURL: process.env.REST_API_ENDPOINT,
    headers: {
      origin: process.env.ORIGIN_URL,
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
  });
};
