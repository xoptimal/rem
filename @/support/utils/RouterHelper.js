/**
 *
 * Created by Freddie on 2018/09/04
 * Description: 路由管理类, 封装路由, 利于管理维护
 */

import router from 'umi/router';
import { parse } from 'qs';

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

export function getRedirect() {
  const urlParams = new URL(window.location.href);
  const params = getPageQuery();
  let { redirect } = params;
  if (redirect) {
    const redirectUrlParams = new URL(redirect);
    if (redirectUrlParams.origin === urlParams.origin) {
      redirect = redirect.substr(urlParams.origin.length);
      if (redirect.match(/^\/.*#/)) {
        redirect = redirect.substr(redirect.indexOf('#') + 1);
      }
    } else {
      window.location.href = redirect;
      return;
    }
  }
  return redirect || '/';
}

function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}
