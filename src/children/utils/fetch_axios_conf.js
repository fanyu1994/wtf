import axios from 'axios'
import { Message } from 'element-ui';
// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 60000
});

// request拦截器
service.interceptors.request.use(
  config => {
    const thisConfig = config;
    // 验证计算;
    thisConfig.headers = {
      'VERSION': 'v1',
      'Content-Type': 'application/x-www-urlcoded;charset=UTF-8',
      Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
    };
    return config;
  },
  error => {
    // Do something with request error
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    const xhr = response.data;
    let thisReturn = '';
    if (response.status === 200) {
      if (xhr.code === 0 || xhr.code === 200) {
        thisReturn = Promise.resolve(xhr);
      } else {
        Message.error(xhr.msg);
        thisReturn = Promise.resolve(xhr);
      }
    } else if (response.status === 401) {
      Message.error('token失效');
      window.localStorage.removeItem('access_token'); // 清除数据
      this.$router.push('/login')

      thisReturn = Promise.reject(xhr);
    } else {
      Message.error({ content: xhr.message ? xhr.message : xhr.msg, duration: 2.5 });
      thisReturn = Promise.reject(xhr);
    }
    return thisReturn;
  },
  error => {
    Message.error('服务器异常，建议稍后重试');
    return Promise.reject(error);
  }
);
const fetch = (method, url, data) => {
  let thisReturnData = '';
  const rep = process.env.NODE_ENV === 'development' ? '/api' : ''
  if (method === 'post') {
    thisReturnData = service.post(`${rep}${url}`, { ...data });
  } else if (method === 'get') {
    thisReturnData = service.get(`${rep}${url}`, {
      params: data
    });
  } else if (method === 'put') {
    thisReturnData = service.put(`${rep}${url}`, { ...data });
  } else if (method === 'delete') {
    thisReturnData = service.delete(`${rep}${url}`, {
      params: data
    });
  }
  return thisReturnData;
};
export default fetch
