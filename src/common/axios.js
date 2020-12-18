import axios from 'axios';
// import api from '../../configs/api';
import { Message } from 'element-ui';

const customAxios = axios.create({
  //   baseURL: api.prefix,
  timeout: 60000,
});

customAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    let msg = err.message;

    if (/^timeout/i.test(msg)) {
      msg = 'Request timeout';
    } else if (/^network error/i.test(msg)) {
      msg = 'Network error';
    }

    Message.error(msg);
    return Promise.reject(err);
  }
);

customAxios.CancelToken = axios.CancelToken;

export default customAxios;
