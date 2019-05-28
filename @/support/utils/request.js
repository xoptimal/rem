import { notification } from 'antd';
import router from 'umi/router';
import {
  checkLoginPermissions,
  defaultRequestHeaders,
  handleResponse,
  handleResponseFailure,
} from '../config';
import { parseFormData, parseUrlData } from './Transform';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  notification.error({
    message: `请求错误 ${response.status}: ${response.url}`,
    description: errortext,
  });
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
};

export default function request(params) {
  let {
    url,
    method = 'POST',
    body,
    bodyType = 'JSON',
    checkLogin = true,
    showMessage,
    msg,
    headers,
  } = params;

  const newOptions = {
    method: method.toUpperCase(),
    headers: { ...defaultRequestHeaders(), ...headers },
  };

  if (checkLogin && !checkLoginPermissions()) {
    router.replace('/users/login');
    return;
  }

  if (
    (newOptions.method === 'POST' ||
      newOptions.method === 'PUT' ||
      newOptions.method === 'DELETE') &&
    body
  ) {
    if (bodyType == 'FORM_DATA') {
      newOptions.body = parseFormData(body);
    } else if (bodyType == 'JSON') {
      newOptions.credentials = 'include';
      newOptions.headers['Content-Type'] = 'application/json; charset=utf-8';
      newOptions.body = JSON.stringify(body);
    }
  } else if (newOptions.method === 'GET' && body) {
    newOptions.credentials = 'include';
    url += parseUrlData(body);
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => response.json())
    .then(res => handleResponse(res, showMessage, msg))
    .catch(e => {
      if (msg) e.message = msg;
      handleResponseFailure(e);
      return Promise.reject(e);
    });
}
