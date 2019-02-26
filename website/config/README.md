
# Config

> 全局配置

_tips: 所有属性方法必须重写实现, 否则影响运行结果_

## Attribute

属性 | 说明 | 默认值
---|---|---
PROJECT_NAME | 项目名称 | -
VERSION_CODE | 项目代码 | -
VERSION_NAME | 版本名称 | -
PAGE_SIZE | 分页数量 | 10
DEFAULT_LOADING_REFRESH_TYPE | 刷新加载方式 | 1
DEFAULT_LOADING_HANDLE_TYPE | 提交加载方式 | 4
DEFAULT_AUTOMATIC | 开启全局自动查询请求 | true
DEFAULT_DATA_WAY | 全局请求数据格式, 支持类型: json, form-data | json

## Method

### checkAuthority
```js
/**
 * 全局权限校验方法, 请根据自身需求重写该方法
 * */
export function checkAuthority(authorities) {
    return true;
}
```

### defaultRequestParams
```js
/**
 * 全局请求请求默认携带参数
 * */
export function defaultRequestParams(params = {}) {
    //  do something...
    return params;
}
```

### checkResponseResult
```js
/**
 * 全局请求请求回调结果判断
 * */
export function checkResponseResult(response) {
    return true;
}
```

### getResponseData
```js
/**
 * 解析Response数据, 返回Data
 * */
export function getResponseData(response) {
    return null;
}
```

### parseListData
```js
/**
 * 解析Response List数据, 返回ListData
 * return {
 *     list: Array,
 *     total : Integer
 * }
 * */
export function parseListData(data) {
    return {list: [], total: 0};
}
```

### getResponseMessage
```js
/**
 * 解析Response数据, 返回Message
 * */
export function getResponseMessage(response) {
    return response.message;
}
```

### hasLoadMore
```js
/**
 * 判断是否还有加载更多数据
 * */
export function hasLoadMore(data) {
    return false;
}
```

### defaultListParams
```js
/**
 * 全局列表请求请求默认携带参数
 * */
export function defaultListParams(page = 1) {
    return {page, pageSize: PAGE_SIZE};
}
```

### handleResponseFail
```js
/**
 * 全局请求回调错误异常处理回调
 * */
export function handleResponseFail(response) {
    // eg.exError('error');
}
```
