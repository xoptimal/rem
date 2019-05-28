/**
 * 用于转换 FormData 对象
 * */
function dataType(obj) {
  if (obj === null) return 'Null';
  if (obj === undefined) return 'Undefined';
  return Object.prototype.toString.call(obj).slice(8, -1);
}

function dealObjectValue(obj) {
  const param = {};
  if (obj === null || obj === undefined || obj === '' || obj == 'undefined') return param;
  for (let key in obj) {
    if (dataType(obj[key]) === 'Object') {
      param[key] = dealObjectValue(obj[key]);
    } else if (
      obj[key] !== null &&
      obj[key] !== undefined &&
      obj[key] !== '' &&
      obj[key] !== 'undefined'
    ) {
      param[key] = obj[key];
    }
  }
  return param;
}

export function parseFormData(obj) {
  const filterObj = dealObjectValue(obj);
  const formData = new FormData();
  for (let key in filterObj) {
    if (filterObj.hasOwnProperty(key) === true) formData.append(key, filterObj[key]);
  }
  return formData;
}

/**
 * 转换成URL参数
 * */
export function parseUrlData(obj) {
  let prefix = '?';
  let _result = [];
  for (let key in obj) {
    let value = obj[key];
    // 去掉为空的参数
    if (['', undefined, null].includes(value)) {
      continue;
    }
    _result.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
  }
  return _result.length ? prefix + _result.join('&') : '';
}

const DEFAULT_HINT = '--';

export function formatValue(value) {
  return value || DEFAULT_HINT;
}

export function findAttributeValue(selectedKey, array) {
  const find = array.find(item => item.key == selectedKey && selectedKey.toString());
  return find ? find.value : DEFAULT_HINT;
}
