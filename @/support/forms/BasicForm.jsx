import { Button, Card, Form, Skeleton } from 'antd';
import React from 'react';
import ExDrawer from '../views/ExDrawer';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { transformData } from '../utils/FormHelper';
import ExModal from '../views/ExModal';
import styles from './BasicForm.less';

const FormItem = Form.Item;

const BasicForm = function({
  onSuccessCallback,
  dateSource = [],
  form,
  config,
  handleLoading,
  onCancel,
  onHandle,
  submitParams,
  visible,
}) {
  const onCheck = () => {
    form.validateFields((err, values) => {
      if (!err && submitParams) onHandle(submitParams(values)).then(() => onSuccessCallback());
    });
  };

  function initFormView() {
    const { getFieldDecorator } = form;
    return (
      <Form>
        {dateSource.map(item => {
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
          <FormItem wrapperCol={{ span: 12, offset: 4 }}>
            <Button loading={handleLoading} onClick={onCheck} type="primary" htmlType="submit">
              提交
            </Button>
          </FormItem>
        )}
      </Form>
    );
  }

  const mode = (config && config.mode) || 1;

  switch (mode) {
    case 1:
      return (
        <ExModal
          {...config}
          onCancel={onCancel}
          visible={visible}
          loading={handleLoading}
          onOk={onCheck}
        >
          {initFormView()}
        </ExModal>
      );
    case 2:
      return (
        <ExDrawer {...config} onCancel={onCancel} visible={visible} loading={handleLoading}>
          {initFormView()}
          <div className={styles.container}>
            <Button style={{ marginRight: 8 }} onClick={onCancel}>
              取消
            </Button>
            <Button loading={handleLoading} onClick={onCheck} type="primary">
              提交
            </Button>
          </div>
        </ExDrawer>
      );

    case 3: {
      return (
        <PageHeaderWrapper>
          <Card bordered={false}>
            <Skeleton loading={handleLoading} active={true}>
              {initFormView()}
            </Skeleton>
          </Card>
        </PageHeaderWrapper>
      );
    }

    default:
      return initFormView();
  }
};

export default Form.create()(BasicForm);
