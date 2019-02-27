/**
 *
 * Created by Freddie on 2018/09/05
 * Description: 资源帮助类, 以及框架自身引用资源整合
 */


/**
 * 系统引用资源, 路径为: /public/drawable, 支持自定义或者替换路径资源等.
 * */
export const IMG_EMPTY = 'img_empty.png';


/**
 * 用于获取静态资源
 * */
export function getDrawable(fileName) {
  return '/drawable/' + fileName;
}


