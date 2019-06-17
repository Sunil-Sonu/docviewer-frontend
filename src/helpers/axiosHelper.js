import axios from 'axios';
import router from '../router';

export const apiAxios = axios.create({
//   baseURL: 'http://tapdev.tapdemo.com/server/api',
  baseURL: `http://127.0.0.1:8000/`,
});

apiAxios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    router.push('/login');
    return Promise.reject(error);
  });

export const apiAxiosResponseInterceptor = response => response.data;

export const apiRequestInterceptor = (request) => {
  return request;
};
