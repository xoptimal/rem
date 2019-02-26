# ExToast

> 多端全局提示处理类

## exLoading
```js
/**
 * 加载形式的Toast
 * */
export function exLoading(value, duration = 1) {
    if (currentDevice && currentDevice.type == 'desktop') {
        message.loading(value, duration);
    } else {
        Toast.loading(value, duration);
    }
}
```

## exSuccess
```js
/**
 * 成功形式的Toast
 * */
export function exSuccess(value, duration = 1) {
    if (value) {
        if (currentDevice && currentDevice.type == 'desktop') {
            message.success(value, duration);
        } else {
            Toast.success(value, duration);
        }
    }
}
```

## exError
```js
/**
 * 失败形式的Toast
 * */
export function exError(value, duration = 2) {
    if (value) {
        if (currentDevice && currentDevice.type == 'desktop') {
            message.error(value, duration);
        } else {
            Toast.fail(value, duration);
        }
    }
}
```

## exWarning
```js
/**
 * 警告形式的Toast
 * */
export function exWarning(value, duration = 1) {
    if (currentDevice && currentDevice.type == 'desktop') {
        message.warning(value, duration);
    } else {
        Toast.fail(value, duration);
    }
}
```

## exClose
```js
/**
 * 关闭Toast
 * */
export function exClose() {
    if (currentDevice && currentDevice.type == 'desktop') {
        message.destroy();
    } else {
        Toast.hide();
    }
}
```
