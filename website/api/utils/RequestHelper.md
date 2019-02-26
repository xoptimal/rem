# Request

> 全局请求处理

## parseJSON
```js
/**
 * Json格式解析
 * */
function parseJSON(response) {
    return response.json();
}
```

## checkStatus
```js
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
```

## request
```js
/**
 * 发送请求
 * */
export function request({path, params, redirectPath, response, dataWay = DEFAULT_DATA_WAY}) {

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

```
