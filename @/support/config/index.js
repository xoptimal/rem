/**
 *
 * Created by Freddie on 2018/09/04
 * Description: 全局配置
 */



//  project name
export const PROJECT_NAME = '';

// table page size, default value=10
export const PAGE_SIZE = 10;

//  version code
export const VERSION_CODE = 1;

//  version name
export const VERSION_NAME = 'v1.0';

export const DEFAULT_LOADING_REFRESH_TYPE = 1;
export const DEFAULT_LOADING_HANDLE_TYPE = 4;

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


/**
 * 全局请求请求回调结果判断
 * */
export function checkResponseResult(response) {
    return true;
}

/**
 * 解析Response数据, 返回Data
 * */
export function getResponseData(response) {
    return null;
}

/**
 * 解析Response List数据, 返回ListData
 * return {
 *     list: Array,
 *     total : Integer
 * }
 * */
export function parseListData(data) {
    return { list: [], total: 0 };
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


/**
 * 全局请求回调错误异常处理回调
 * */
export function handleResponseFail(response) {
    // eg.exError('error');
}





