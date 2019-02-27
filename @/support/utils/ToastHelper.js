/**
 *
 * Created by Freddie on 2018/09/04
 * Description: 多端全局提示处理类
 */


import {Toast} from 'antd-mobile';
import {message} from 'antd';
import device from 'current-device';

const currentDevice = device.noConflict();

message.config({
    top: 150,
    duration: 1,
    maxCount: 3,
});

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



