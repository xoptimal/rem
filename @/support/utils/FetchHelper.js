/**
 *
 * Created by Freddie on 2018/09/04
 * Description: 全局请求处理
 */


import fetch from 'dva/fetch';
import {DEFAULT_DATA_WAY, defaultRequestParams} from '../config/index';
import {formatDataToFormData} from "./FormDataHelper";

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

/**
 * Json格式解析
 * */
function parseJSON(response) {
    return response.json();
}

/**
 * 检查网络请求状态码
 * */
function checkStatus(response) {
    const {status, statusText, url} = response;
    if (status >= 200 && status < 300) return response;
    const errortext = codeMessage[status] || statusText;
    const error = new Error(errortext);
    error.name = status;
    error.response = response;
    throw error;
}


/**
 * 发送请求
 * */
export function exFetch({path, params, redirectPath, response, dataWay = DEFAULT_DATA_WAY}) {

    const options = {method: 'POST'};

    const tempParams = defaultRequestParams(params);

    if (dataWay == 'form-data') {
        options.body = formatDataToFormData(tempParams);

    } else {
        options.credentials = 'include';
        options.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
        };
        options.body = JSON.stringify(tempParams);
    }

    return fetch(path, options)
        .then(checkStatus)
        .then(parseJSON)
        .then(data => {
            if (response) response({...data, path, redirectPath});
            return data;
        })
        .catch(err => {
            console.log(err);
            let code = 'x', msg = '未知错误';
            if (err.message == 'Failed to fetch') {
                code = 404;
                msg = '发出的请求针对的是不存在的记录，服务器没有进行操作。';
            } else if (err.hasOwnProperty('response')) {
                code = err.response.status;
                msg = err.message;
            } else if (err.hasOwnProperty('code')) {
                code = err.code;
                msg = err.message;
            }
            if (response) response({code, msg, redirectPath, path});
            return {code, msg};
        });
}




