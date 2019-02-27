/**
 *
 * Created by Freddie on 2018/9/19 .
 * Description: 网络状态切换View
 */

import React from 'react';
import {getDrawable} from '../../config/resource';
import styles from './index.less';
import {Button, Icon} from 'antd-mobile';
import {exPush} from '../../utils/RouterHelper';


export default function NetLayout(props) {

    const {code, message, onClickRetry, children, loading} = props;

    //  默认界面,成功界面
    if (loading) {
        return <div className={styles.container}>
            {children}
            <div className={styles.load}>
                <div>
                    <Icon type={'loading'} size={'lg'}/>
                    <p>{'加载中...'}</p>
                </div>
            </div>
        </div>;

    } else if ((!loading && !code) || code && code == 'SUCC') {    // 成功
        return children;

    } else if (code && code == 'TOKEN_INVALID') {   //  权限界面
        return <div className={styles.failed}>
            <img src={getDrawable('icon_failed.png')}/>
            <p className={styles.text_message}>{message || '访问需要登录哦, 赶紧去登录吧!'}</p>
            <Button
                type={'ghost'}
                className={styles.btn_normal}
                onClick={() => exPush({
                    pathname: '/login',
                    state: {redirectPath: location && location.pathname},
                })}>点击登录</Button>
        </div>;

    } else {
        return <div className={styles.failed}>
            <img src={getDrawable('icon_failed.png')}/>
            <p className={styles.text_message}>{message || '未知错误, 请稍后再试!'}</p>
            <Button
                type={'ghost'}
                className={styles.btn_normal}
                onClick={onClickRetry}>点击重试</Button>
        </div>;
    }
}
