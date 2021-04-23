import axios from 'axios';

const BACKEND_URL = `https://cors-anywhere.herokuapp.com/http://www.cbr.ru/scripts/XML_daily.asp?date_req=23/04/2021`;
const REQUEST_TIMEOUT = 5000;

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
