
# NetComponent

> 通用网络请求处理继承类

## props/state

属性 | 说明 | 默认值
---|---|---
automatic | 是否开启自动查询请求 | true
loadingType | 加载方式: 1=弹出框, 2=下拉, 3=加载更多, 4=提交弹出框, 5=提交按钮 | -
netInfo | 请求数据对象 | -
visible | 用于控制显示隐藏 | false



## method

### queryParams
```js
/**
 * 查询请求携带参数
 * return { path: 接口地址, params: 接口接收参数, dataWay: 接口参数类型(json/form-data) }
 * */
queryParams() {
    return {path: null, params: null};
}
```

### onBeforeRefreshUpdateState
```js
/**
 * onRefresh方法触发前更新State数据集
 * */
onBeforeRefreshUpdateState(loadingType) {
    return {loadingType};
}
```

### onRefresh
```js
/**
 * 用于查询请求, 不建议重写该方法, 如需重写请保留在原有基础上
 * payload: {
 *   path: 接口地址
 *   params: 接口接收参数
 *   dataWay: 接口参数类型(json/form-data)
 *   redirectPath: 登录成功跳转路径
 *   response: 接口请求结果回调函数
 * }
 * tips: 不建议重写该方法, 如需重写请保留在原有基础上
 * */
onRefresh(loadingType = 1, type = 'common/onRefresh') {
    this.setState(this.onRefreshStateParams(loadingType), () => {
        const {location, dispatch} = this.props;
        dispatch({
            type,
            payload: {
                ...this.queryParams(),
                redirectPath: location && location.pathname || '/',
                response: this.onRefreshResponse.bind(this),
            },
        });
    });
}
```

### onRefreshResponse
```js
/**
 * onRefresh()回调方法
 * tips: 不建议重写该方法, 如需重写请保留在原有基础上
 * */
onRefreshResponse(response) {
    const result = checkResponseResult(response);
    this.setState({
            loadingType: -1,
            netInfo: response,
        }, () => {
            this.props.dispatch({
                type: 'common/updateRequestFails',
                payload: {response, result},
            });
            if (result) {
                this.onRefreshSuccess(getResponseData(response));
            } else {
                this.onRefreshFailure(response);
            }
        },
    );
}
```

### onRefreshSuccess
```js
/**
 * 请求成功回调方法, 默认保留在state中
 * data: 回调接口数据
 * */
onRefreshSuccess(data) {
    this.setState({...data});
}
```

### onRefreshFailure
```js
/**
 * 请求失败回调方法, 默认采用全局handleResponseFail()方法处理
 * */
onRefreshFailure(response) {
    handleResponseFail(response);
}
```

### onHandle
```js
/**
* 用于提交请求
* tips: 不建议重写该方法, 如需重写请保留在原有基础上
* */
onHandle(payload, loadingType = DEFAULT_LOADING_HANDLE_TYPE, type = 'common/onHandle') {
if (loadingType == 4) {
    exLoading(formatMessage({id: 'handle.loading'}), 0);
}
this.setState({loadingType}, () => {
    this.props.dispatch({
        type,
        payload: {
            ...payload,
            response: this.onHandleResponse.bind(this),
        },
    });
});
}
```

### onHandleResponse
```js
/**
* 提交请求回调方法
* tips: 不建议重写该方法, 如需重写请保留在原有基础上
* */
onHandleResponse(response) {
this.setState({loadingType: -1}, () => {
    exClose();
    if (checkResponseResult(response)) {
        this.setState({visible: false}, () => {
            exSuccess(getResponseMessage(response));
            this.onHandleSuccess(getResponseData(response));
        });
    } else {
        exError(getResponseMessage(response));
        this.onHandleFailure(response);
    }
});
}
```

### onHandleSuccess
```js
/**
 * 提交请求成功回调方法, 默认采用刷新界面方式处理
 * */
onHandleSuccess(data) {
    this.onRefresh();
}
```

### onHandleFailure
```js
/**
 * 提交请求失败回调方法, 默认采用全局handleResponseFail()方法处理
 * */
onHandleFailure(response) {
    handleResponseFail(response);
}
```

### checkRequestFailed
```js
/**
* 用于检查当前页面是否请求失败过
* tips: 需加载 eg.connect(state => state.common)使用
* */
checkRequestFailed() {
const {path} = this.queryParams();
const {requestFails = []} = this.props;
const filters = requestFails.filter(item => item.path == path);
if (filters.length >= 1) {
    this.setState({netInfo: filters[0]});
    return false;
}
return true;
}
```

### componentDidMount
```js
/**
 * 用于自动加载请求
 * 如需重写请保留在原有基础上, 确保自动加载正常
 * eg: super.componentDidMount();
 * */
componentDidMount() {
    const {automatic} = this.state;
    if (automatic && this.checkRequestFailed()) this.onRefresh();
}
```

### onClose
```js
/**
 * 用于弹出框触发关闭回调方法
 * */
onClose() {
    this.setState({visible: false});
}
```

### initFormParams
```js
/**
 * 提交表单默认参数, 请结合WebForm捆绑使用.
 * */
initFormParams(params = {}) {
    const {loadingType = -1, selData, visible} = this.state;
    const temp = {
        onClose: this.onClose.bind(this),
        onSubmit: this.onHandle.bind(this),
        loading: loadingType == 4 || loadingType == 5,
        data: selData,
        visible: visible,
    };
    return {...temp, ...params};
}
```

### initNetLayoutParams
```js
/**
 * NetLayout默认配置参数, 请结合NetComponent使用
 * */
initNetLayoutParams() {
    const {loadingType = -1} = this.state;
    return {
        loading: loadingType == 1,
        onClickRetry: this.onRefresh.bind(this),
    };
}
```
