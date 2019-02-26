
# ListViewComponent
>  Mobile端列表继承类

## method

### queryListParams
```js
/**
 * 查询请求携带参数,
 * tips: 请务必重写该方法,否则影响请求
 * */
queryListParams() {
    return {path: null, params: null};
}
```

### renderListItemView
```js
/**
 * ListView Item实现方法
 * tips: 请务必重写该方法, 否则影响数据展示
 * */
renderListItemView(rowData, sectionID, rowID) {
    return null;
};
```

### onBeforeRefreshUpdateState
```js
/**
 * onRefresh方法触发前更新State数据集
 * */
onBeforeRefreshUpdateState(loadingType) {
    return {loadingType, page: 1};
}
```

### onRefreshSuccess
```js
/**
 * 请求成功回调方法, 默认保留在state中
 * data: 回调接口数据
 * */
onRefreshSuccess(data) {
    this.setState({...data, LMStatus: hasLoadMore(data) ? 0 : 3});
}
```

### onLoadMore
```js
/**
 * 加载更多
 * tips: 不建议重写该方法, 如需重写请保留在原有基础上
 * */
onLoadMore() {
    this.setState({page: this.state.page + 1, LMStatus: 1});
    this.props.dispatch({
        type: 'common/onRefresh',
        payload: {
            ...this.queryParams(),
            response: this.onLoadMoreResponse.bind(this),
        },
    });
}
```

### onLoadMoreResponse
```js
/**
 * 加载更多回调
 * tips: 不建议重写该方法, 如需重写请保留在原有基础上
 * */
onLoadMoreResponse(response) {
    const result = checkResponseResult(response);
    const {list, page} = this.state;
    const data = response.result;
    if (result) {
        this.setState({
            LMStatus: hasLoadMore(data) ? 0 : 3,
            list: [...list, ...data.list],
        });
    } else {
        this.setState({page: page - 1, LMStatus: 2});
    }
}
```

### stepListView
```js
/**
 * 初始化ListView配置
 * */
stepListView() {
    const {list = []} = this.state;
    return {list};
}
```

### renderListView
```js
/**
 * 创建ListView
 * */
renderListView() {
    const {loadingType = -1, LMStatus = 0} = this.state;
    const defaultParams = {
        automatic: true,
        LMStatus: LMStatus,
        refreshing: loadingType == 2,
        isComplete: loadingType == -1,
        renderRow: this.renderListItemView.bind(this),
        onRefresh: this.onRefresh.bind(this),
        onLoadMore: this.onLoadMore.bind(this),
    };
    return <ExListView {...defaultParams} {...this.stepListView()} />;
}
```

### stepNavLayout
```js
/**
 * 设置NavLayout, eg. {title: 'test', showReturn: true ...}
 * 更多配置, 请查阅 NavLayout
 * */
stepNavLayout() {
    return null;
}
```

### renderTopView
```js
/**
 * 创建化顶部视图
 * */
renderTopView() {
    return null;
}

```

### renderBottomView
```js
/**
 * 创建化底部视图
 * */
renderBottomView() {
    return null;
}
```

### renderContent
```js
/**
 * 初始化 renderTopView, renderListView, renderBottomView
 * */
renderContent() {
    return (
        <NetLayout {...this.initNetLayoutParams()}>
            {this.renderTopView()}
            {this.renderListView()}
            {this.renderBottomView()}
        </NetLayout>
    );
}
```

### render
```js
/**
 * tips: 不建议重写该方法, 如需重写请保留在原有基础上
 * */
render() {
    const params = this.stepNavLayout();
    if (!!params) {
        return (
            <NavLayout {...params} hasScroll={true}>
                {this.renderContent()}
            </NavLayout>
        );
    }
    return this.renderContent();
}
```
