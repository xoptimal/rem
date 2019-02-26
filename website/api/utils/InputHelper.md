# Input

> 输入相关校验,规则帮助类

## stepInput
```js
/**
 * 限制输入内容长度以及提示
 * */
export function stepInput(maxLength = 20, placeholder = '请输入内容') {
    return {placeholder: placeholder, maxLength};
}
```

## stepPassword
```js
/**
 * 限制为密码输入形式
 * */
export function stepPassword() {
    return {autoComplete: 'new-password', type: 'password'};
}

```

## vRequired
```js
/**
 * 不允许为空
 * */
export function vRequired(message, required = true) {
    return {required, message: `请输入${message}!`};
}
```

## vPhone
```js
/**
 * 输入手机号码
 * */
export function vPhone() {
    return {pattern: /^1\d{10}$/, message: '请输入正确的手机号码!'};
}
```

## vPassword
```js
/**
 * 限制输入格式
 * */
export function vPassword() {
    return {pattern: /^[A-Za-z0-9]{6,20}$/, message: '密码只允许输入数字+字母形式, 6-12位数!'};
}
```
