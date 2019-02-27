/**
 *
 * Created by Freddie on 2018/09/04
 * Description: 路由管理类, 封装路由, 利于管理维护
 */


import router from 'umi/router';

/**
 * 跳转
 * */
export function exPush(path) {
    router.push(path);
}

/**
 * 替换跳转
 * */
export function exReplace(path) {
    router.replace(path);
}

/**
 * 回退
 * */
export function exGoBack() {
    router.goBack();
}
