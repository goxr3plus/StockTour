import axios from 'axios';
import { v4 } from 'uuid';

const axiosOptions = (method, url, options, contentType, headers = {}) => {
  return {
    method: method,
    url: url,
    baseUrl: `https://`,
    headers: {
      Accept: 'application/json',
      'Content-Type': contentType || 'application/json',
      guid: v4(),
      ...headers,
    },
    timeout: 60000,
    ...options,
  };
};

/* Simple method for doing axios calls */
const serverApi = (method, url, options, contentType, headers) => axios(axiosOptions(method, url, options, contentType, headers));

export { serverApi, axiosOptions, axios };
