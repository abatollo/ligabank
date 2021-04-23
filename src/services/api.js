import axios from 'axios';

import {API_KEY} from '../const/api-key';

const BACKEND_URL = `https://free.currconv.com/api/v7/convert`;
const REQUEST_TIMEOUT = 5000;

console.log(API_KEY);

export const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
