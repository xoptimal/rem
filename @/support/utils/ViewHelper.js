import {
  Button,
  Cascader,
  Checkbox,
  Input,
  InputNumber,
  Popconfirm,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
import React from 'react';
import UploadView from '../views/UploadView';

/**
 * View对象说明:
 *
 *    key: 唯一标识
 *    value: 内容
 *    content: 内容
 *    componentName: 组件名称
 *    componentOptions: 组件参数
 *    componentChildren: 组件下的子组件集
 *    authority: 权限唯一标识
 *    visibility : 是否显示(boolean)
 *
 *
 *    扩展字段, 用于Form:
 *    formItemOptions: FormItem的Options
 *    fieldDecoratorOptions: getFieldDecorator接收参数
 *    required: false
 *
 * */

/**
 *  根据数据格式, 转换具体的View
 * */
export function transformComponent({
  key,
  content,
  componentName,
  componentChildren = [],
  componentOptions,
  transformChildren = item => ({ key: item.key, value: item.key, text: item.value }),
}) {
  switch (componentName) {
    case 'Input':
      return <Input key={key} placeholder="请输入" {...componentOptions} />;

    case 'InputNumber':
      return (
        <InputNumber
          style={{ width: '100%' }}
          key={key}
          placeholder="请输入"
          {...componentOptions}
        />
      );

    case 'UploadView':
      return <UploadView key={key} {...componentOptions} />;

    case 'Select':
      return (
        <Select key={key} placeholder={'请选择'} {...componentOptions}>
          {componentChildren.map(item => {
            const transformedValue = transformChildren(item);
            return (
              <Select.Option key={transformedValue.key} value={transformedValue.key}>
                {transformedValue.text}
              </Select.Option>
            );
          })}
        </Select>
      );

    case 'TreeSelect':
      return (
        <TreeSelect key={key} placeholder={'请选择'} {...componentOptions}>
          {componentChildren.map(item => traverseView(TreeSelect.TreeNode, item))}
        </TreeSelect>
      );

    case 'Radio':
      return (
        <Radio.Group key={key} placeholder={'请选择'} {...componentOptions}>
          {componentChildren.map(item => (
            <Radio key={item.key} value={item.key}>
              {item.value}
            </Radio>
          ))}
        </Radio.Group>
      );

    case 'TextArea':
      return (
        <Input.TextArea
          key={key}
          placeholder=""
          autosize={{ minRows: 2, maxRows: 6 }}
          {...componentOptions}
        />
      );

    case 'Button':
      return (
        <Button key={key} {...componentOptions}>
          {content}
        </Button>
      );

    case 'TextLink':
      return (
        <a key={key} {...componentOptions}>
          {content}
        </a>
      );

    case 'PopConfirm':
      return (
        <Popconfirm key={key} {...componentOptions}>
          {content}
        </Popconfirm>
      );

    case 'Cascader':
      return <Cascader key={key} placeholder={'请选择'} {...componentOptions} />;

    case 'Checkbox':
      return (
        <Checkbox.Group key={key} placeholder={'请选择'} {...componentOptions}>
          {componentChildren.map(item => (
            <Checkbox key={item.key} value={item.key}>
              {item.value}
            </Checkbox>
          ))}
        </Checkbox.Group>
      );

    case 'Upload':
      return <UploadView {...componentOptions} />;

    case 'Switch':
      return <Switch {...componentOptions} />;
  }
}

function traverseView(ViewNode, item) {
  if (item.treeNode && item.treeNode.length > 0) {
    return (
      <ViewNode title={item.name} key={item.id} value={item.id} entity={item}>
        {item.treeNode.map(childItem => traverseView(ViewNode, childItem))}
      </ViewNode>
    );
  } else {
    return <ViewNode title={item.name} key={item.id} value={item.id} entity={item} />;
  }
}

/**
 *  转换复数View
 * */
export function transformViews(fields) {
  if (!fields) return;
  if (Array.isArray(fields)) {
    return fields.map(item => transformComponent(item));
  }
  return transformComponent(fields);
}
