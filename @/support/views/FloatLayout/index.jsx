/**
 *
 * Created by Freddie on 2018/09/04
 * Description: WEB端通用表格操作继承类
 */

import React, { Suspense } from 'react';

export default function FloatLayout(props) {
  const { fields = [] } = props;

  function transformOptions(options = []) {
    const { selectedData, selectedKey, onCancel, onSuccessCallback } = props;
    const current = options.find(item => item.key == selectedKey);
    return {
      selectedData,
      config: current,
      onCancel,
      visible: current != undefined,
      onSuccessCallback,
    };
  }

  return (
    <Suspense fallback={null}>
      {fields.map((item, index) => (
        <item.component key={index} {...transformOptions(item.options)} />
      ))}
    </Suspense>
  );
}
