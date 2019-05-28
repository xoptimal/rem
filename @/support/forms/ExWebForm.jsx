/**
 *
 * Created by Freddie on 2018/09/04
 * Description: Web端通用表单继承类
 */

import React, { Component } from 'react';
import { Button, Card, Form, Skeleton } from 'antd';
import ExModal from '../views/ExModal/index';
import ExDrawer from '../views/ExDrawer/index';
import { transformData } from '../utils/FormHelper';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { transformViews } from '../utils/ViewHelper';

const FormItem = Form.Item;

export default class ExWebForm extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.handleLoading) return false;
    const currentData = nextProps.data;
    const lastData = this.props.data;
    if (currentData && lastData && currentData.id != lastData.id) {
      this.props.form.resetFields();
    }
    return true;
  }

  /**
   * 上传提交参数
   * return { url: 接口地址, body: 接口接收参数, dataType: 接口参数类型(json/form-data) }
   * */
  submitParams(values) {
    return;
  }

  /**
   * 用于监听提交操作
   * */
  onSubmit() {
    this.props.form.validateFields((err, values) => {
      if (!err && this.props.onSubmit) {
        this.props.onSubmit(this.submitParams(values));
      }
    });
  }

  /**
   * 默认操作按钮(取消/提交)
   * */
  renderOperation() {
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
        {this.initToolbar()}
      </div>
    );
  }

  initToolbar() {
    const { onClose, handleLoading } = this.props;
    return (
      <>
        <Button style={{ marginRight: 8 }} onClick={onClose}>
          取消
        </Button>
        <Button loading={handleLoading} onClick={this.onSubmit.bind(this)} type="primary">
          提交
        </Button>
      </>
    );
  }

  /**
   * 初始化弹窗参数
   * */
  initPopup() {}

  /**
   * 初始化表单参数
   * */
  stepFormParams() {
    return { layout: 'horizontal' };
  }

  /**
   * 设置表单成员
   * */
  stepFormFields() {
    return [];
  }

  /**
   * 初始化表单
   * tips: 不建议重写该方法, 如需重写请保留在原有基础上
   * */
  initFormView() {
    const { form, config, handleLoading } = this.props;
    const { getFieldDecorator } = form;
    const fields = this.stepFormFields();
    return (
      <Form {...this.stepFormParams()}>
        {fields.map(item => {
          const { key, formItemOptions, fieldDecoratorOptions, render } = transformData(item);
          if (key && render) {
            return (
              <FormItem {...formItemOptions} key={key}>
                {getFieldDecorator(key, fieldDecoratorOptions)(render)}
              </FormItem>
            );
          }
        })}
        {config && config.mode === 3 && (
          <Form.Item wrapperCol={{ span: 12, offset: 4 }}>
            <Button loading={handleLoading} type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        )}
      </Form>
    );
  }

  initPageHeaderParams() {
    return {
      action: <div>{transformViews(this.stepToolbarActionFields())}</div>,
    };
  }

  stepToolbarActionFields() {
    return [];
  }

  initCardParams() {}

  /**
   * mode={1=弹出框形式, 2=侧边栏形式, 其他=直接输出内容}
   * tips: 不建议重写该方法, 如需重写请保留在原有基础上
   * */
  render() {
    const { onCancel, handleLoading, visible, config } = this.props;

    const mode = (config && config.mode) || 1;

    switch (mode) {
      case 1:
        return (
          <ExModal
            {...config}
            onCancel={onCancel}
            visible={visible}
            loading={handleLoading}
            {...this.initPopup()}
            onOk={this.onSubmit.bind(this)}
          >
            {this.initFormView()}
          </ExModal>
        );
      case 2:
        return (
          <ExDrawer
            {...config}
            onCancel={onCancel}
            visible={visible}
            loading={handleLoading}
            {...this.initPopup()}
          >
            {this.initFormView()}
            {this.renderOperation()}
          </ExDrawer>
        );

      case 3: {
        return (
          <PageHeaderWrapper {...this.initPageHeaderParams()}>
            <Card bordered={false} {...this.initCardParams()}>
              <Skeleton loading={handleLoading} active={true}>
                {this.initFormView()}
              </Skeleton>
            </Card>
          </PageHeaderWrapper>
        );
      }

      default:
        return this.initFormView();
    }
  }
}
