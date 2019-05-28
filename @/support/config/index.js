import { getPersistenceData } from '../utils/Persistence';
import { SL_TOKEN } from '../../utils/constants';
import router from 'umi/router';
import { message } from 'antd';

/**
 *
 * Created by Freddie on 2018/09/04
 * Description: 全局配置
 */

// table page size, default value=10
export const PAGE_SIZE = 10;

export const LOADING_REFRESH_TYPE = 1;
export const DEFAULT_LOADING_HANDLE_TYPE = 4;

const ERROR_CODES = [
  { code: 131073, value: '密码错误' },
  { code: 131074, value: '没有这个账号' },
  { code: 65616, value: '用户名长度必需在3到30位之间' },
];

/**
 * 开启全局自动查询请求
 */
export const DEFAULT_AUTOMATIC = true;

/**
 * 全局请求数据格式, 支持类型: json, form-data
 * 可根据requestPost({dataWay : 'json' })方法, 动态调整数据格式
 * */
export const DEFAULT_DATA_WAY = 'json';

/**
 * 全局权限校验方法, 请根据自身需求重写该方法
 * */
export function checkAuthority(authorities) {
  return true;
}

/**
 * withFetch触发componentWillReceiveProps函数时, 通过该方法判断是否刷新
 * */
export function updatePropsWhetherToRefresh(nextProps) {
  return nextProps && nextProps.selectedData && nextProps.visible;
}

/**
 * withFetch触发componentWillReceiveProps函数时, 通过该方法判断是否清空state数据
 * */
export function updatePropsWhetherToClearState(prevProps, nextProps) {
  const prevSelectData = prevProps.selectedData;
  const nextSelectData = nextProps.selectedData;

  return (
    nextProps.visible &&
    (nextSelectData == null || (prevSelectData && nextSelectData.id != prevSelectData.id))
  );
}

/**
 * 全局请求请求默认携带参数
 * */
export function defaultRequestParams(params = {}) {
  //  do something...
  return params;
}

/**
 * 全局列表请求请求默认携带参数
 * */
export function defaultListParams(page = 1) {
  return { page, pageSize: PAGE_SIZE };
}

export function checkLoginPermissions() {
  const token = getPersistenceData(SL_TOKEN);
  return token != undefined || token != 'undefined' || token != null;
}

export function defaultRequestHeaders() {
  const headers = { Accept: 'application/json, text/plain, */*' };
  const token = getPersistenceData(SL_TOKEN);
  if (token) headers['Authorization'] = token;
  return headers;
}

/**
 * 全局请求回调
 * */
export function handleResponse(res, showMessage, msg) {
  const { data, resultCode } = res;
  const messageValue = msg || res.message;
  if (resultCode === 0 || resultCode === '0') {
    if (showMessage && messageValue) message.success(messageValue);
    return data;
  } else {
    if (showMessage) message.error(res.message);
  }
  throw new Error(messageValue);
}

export function handleResponseFailure(e) {
  const status = e.name;

  if (status === 401) {
    // @HACK
    /* eslint-disable no-underscore-dangle */
    window.g_app._store.dispatch({
      type: 'login/logout',
    });
  } else if (status === 403) {
    router.push('/exception/403');
  } else if (status <= 504 && status >= 500) {
    router.push('/exception/500');
  } else if (status >= 404 && status < 422) {
    router.push('/exception/404');
  }
}

/**
 * 解析Response List数据, 返回ListData
 * return {
 *     list: Array,
 *     total : Integer
 * }
 * */
export function parseListData(data) {
  let list = [],
    total = 0;
  if (data && Array.isArray(data) && data.length > 0) {
    list = data;
    total = data.length;
  } else if (data && data.list && data.list.length > 0) {
    list = data.list;
    total = data.list.length;
  }
  return { list, total };
}

/**
 * 解析Response数据, 返回Message
 * */
export function getResponseMessage(response) {
  return response.message;
}

/**
 * 判断是否还有加载更多数据
 * */
export function hasLoadMore(data) {
  return false;
}
