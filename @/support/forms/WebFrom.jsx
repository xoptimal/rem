/**
 *
 * Created by Freddie on 2018/09/04
 * Description: Web端通用表单继承类
 */

import React from 'react';
import { Button, Form } from 'antd';
import NetComponent from '../components/NetComponent';
import ExModal from '../views/ExModal/index';
import ExDrawer from '../views/ExDrawer/index';

export default class WebFrom extends NetComponent {
  state = {
    automatic: false, // 表单组件默认取消自动加载
  };

  /**
   * 上传提交参数
   * return { path: 接口地址, params: 接口接收参数, dataWay: 接口参数类型(json/form-data) }
   * */
  submitParams(params) {
    return { path: '', params };
  }

  /**
   * 用于监听提交操作
   * */
  onSubmit() {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onCheckSubmit(this.submitParams(values));
      }
    });
  }

  /**
   * 默认操作按钮(取消/提交)
   * */
  renderOperation() {
    const { onClose, loading } = this.props;
    return (
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e8e8e8',
          padding: '10px 16px',
          textAlign: 'right',
          left: 0,
          background: '#fff',
          borderRadius: '0 0 4px 4px',
        }}
      >
        <Button style={{ marginRight: 8 }} onClick={onClose}>
          取消
        </Button>
        <Button loading={loading} onClick={this.onSubmit.bind(this)} type="primary">
          提交
        </Button>
      </div>
    );
  }

  /**
   * 初始化表单
   * */
  initFormView() {
    return <Form {...this.stepFormParams()}>{this.renderFormItemViews()}</Form>;
  }

  /**
   * 初始化表单数据视图
   * tips: 请务必重写该方法, 否则影响数据展示
   * */
  renderFormItemViews() {
    return <></>;
  }

  /**
   * 初始化表单参数
   * */
  stepFormParams() {
    return { layout: 'vertical' };
  }

  /**
   * mode={1=弹出框形式, 2=侧边栏形式, 其他=直接输出内容}
   * tips: 不建议重写该方法, 如需重写请保留在原有基础上
   * */
  render() {
    const { mode = 0 } = this.props;

    if (mode == 1)
      return (
        <ExModal {...this.props} checkSubmit={this.onSubmit.bind(this)}>
          {this.initFormView()}
        </ExModal>
      );

    if (mode == 2)
      return (
        <ExDrawer {...this.props}>
          {this.initFormView()}
          {this.renderOperation()}
        </ExDrawer>
      );

    return this.initFormView();
  }
}
