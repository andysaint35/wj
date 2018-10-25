import axios from 'axios';
import encryptSign from './sign';
import { loading, toast } from 'mz-ui';
import qs from 'qs';

var HOST = 'http://127.0.0.1:3000'
var test_host = HOST;
//HOST += '/feserver';
var counter = 0;
loading.set({
  text: '请稍后...',
  className: 'loading'
});

axios.defaults.timeout = 5000;
axios.defaults.baseURL = HOST;
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Add a request interceptor
axios.interceptors.request.use(
  function(config) {
    if (!config.silence) {
      counter++;
      loading.show();
    }

    // var jwt = sessionStorage.getItem('jwt');
    // if (!config.noJwt && jwt) {
    //   config.headers.jwt = jwt;
    // }
    // 
    config.params = {
      token : sessionStorage.getItem('token')||"",
      user_id : '2',
      ...config.params
    };
    
    // if (config.method == 'get') {
    //   config.params = encryptSign.sign(config.params);
    // } else {
    //   config.data = encryptSign.sign(config.data);
    // }
    if(config.method === 'post') {
        config.data = qs.stringify( {
            ...config.data
        })
    } 
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    if (!response.config.silence) {
      counter--;
      if (!counter) {
        loading.hide();
      }
    }
    return response.data;
  },
  function(error) {
    if (!error.config.silence) {
      counter--;
      if (!counter) {
        loading.hide();
      }
    }
    if (error.response && error.response.status === 401) {
      toast.info('请退出页面重新登录');
      return;
    }
    if (error.response && error.response.status === 404) {
      toast.info('网络错误404');
      return;
    }
    if (error.response == undefined) {
      toast.info('网络错误');
      return;
    }
    return Promise.reject(error);
  }
);
var obj = {
  axios: axios,
  HOST: test_host
};

export default obj;
