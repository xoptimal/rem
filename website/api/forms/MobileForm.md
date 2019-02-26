# MobileForm

> 手机端通用表单继承类

## method

### submitParams
```js
/**
 * 上传提交参数
 * return { path: 接口地址, params: 接口接收参数, dataWay: 接口参数类型(json/form-data) }
 * */
submitParams(params) {
    return {path: '', params};
}
```

### onSubmit
```js
/**
 * 用于点击提交回调
 * */
onSubmit() {
    const {form} = this.props;
    form.validateFields((err, values) => {
        if (!err) {
            this.onHandle(this.submitParams(values));
        } else {
            const keys = Object.getOwnPropertyNames(err);
            exError(err[keys[0]].errors[0].message, 1);
        }
    });
}
```

### onHandleSuccess
```js
/**
 * 提交请求成功回调方法, 默认不做任何处理,请根据实际情况重写该方法
 * */
onHandleSuccess(data) {
}
```

### initFormView
```js
/**
 * 初始化Form表单
 * tips: 请务必重写该方法, 否则影响数据展示
 * */
initFormView() {
    const {form, data} = this.props;
    const {getFieldProps} = form;
    return <List>
        <InputItem
            {...getFieldProps('name', {
                rules: [vRequired('名字')],
                initialValue: data && data.name,
            })}/>
    </List>;
}
```

### renderButton
```js
/**
 * tips: 默认提交按钮, 请根据实际需要进行重写引用
 * */
renderButton(name, formItemNames) {
    const {form} = this.props;
    const list = formItemNames instanceof Array ? formItemNames : [formItemNames];
    let validCount = 0;
    for (let item of list) {
        if (!!form.getFieldValue(item)) validCount++;
    }
    return <Button type="primary"
                   disabled={validCount != list.length}
                   onClick={this.onSubmit.bind(this)}
                   className={styles.btn_margin}>{name}</Button>;
}
```
