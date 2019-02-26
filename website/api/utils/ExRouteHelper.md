# ExRouter

> 路由管理类, 封装路由, 利于管理维护

## exPush
```js
/**
 * 跳转
 * */
export function exPush(path) {
    router.push(path);
}
```

## exReplace
```js
/**
 * 替换跳转
 * */
export function exReplace(path) {
    router.replace(path);
}
```

## exGoBack
```js
/**
 * 回退
 * */
export function exGoBack() {
    router.goBack();
}
```
