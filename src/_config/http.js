import axios from 'axios';
import { getUserToken, isAuthenticated } from '~/utils/auth';

const HTTP = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json'
  },
  transformResponse: [
    function (data) {
      return data
    }
  ]
})

HTTP.interceptors.request.use(config => {
  if (isAuthenticated()) {
    config.headers['Authorization'] = `Bearer ${getUserToken()}`
  }

  return config;
},
error => Promise.reject(error));

export default HTTP;
