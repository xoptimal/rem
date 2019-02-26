# Common

> 常用工具类

## getRandomNumber
```js
/**
 * 获取一个随机数
 * **/
export function getRandomNumber(digit = 5) {
    let value = '1';
    for (let i = 0; i < digit; i++) value += '0';
    return Math.floor(Math.random() * parseInt(value));
}
```

## substring
```js
/**
 * 获取一个裁切数
 * */
export function substring(value, start, end = value.length) {
    return value.substring(start, end);
}
```

## contains
```js
/**
 * 判断是否有包含
 * */
export function contains(values, value) {
    if (values instanceof Array) {
        for (let i = 0; i < values.length; i++) {
            if (values[i] === value) return true;
        }
        return false;
    } else {
        return values === value;
    }
}
```
