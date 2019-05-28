import React, { PureComponent } from 'react';
import { Button, Form, Icon } from 'antd';

@Form.create()
export default class SearchForm extends PureComponent {
  state = {
    expand: false,
  };

  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      this.props.onSubmit(values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  renderButton() {
    return (
      <>
        <Button type="primary" htmlType="submit">
          查询
        </Button>
        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
          清空
        </Button>
        {this.props.expand && (
          <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
            {this.state.expand ? '收起' : '展开'} <Icon type={this.state.expand ? 'up' : 'down'} />
          </a>
        )}
      </>
    );
  }

  initFormParams() {
    return {
      layout: 'inline',
      hideRequiredMark: true,
      onSubmit: this.handleSearch.bind(this),
      style: { marginBottom: 16 },
    };
  }

  initFormItem(item) {
    const { getFieldDecorator } = this.props.form;
    if (!item.props.expand || this.state.expand) {
      return (
        <Form.Item label={item.props.name} key={item.key}>
          {getFieldDecorator(item.key, {
            rules: item.props.rules,
          })(item)}
        </Form.Item>
      );
    }
  }

  render() {
    const { children } = this.props;
    return children ? (
      <Form {...this.initFormParams()}>
        {Array.isArray(children)
          ? children.map(item => this.initFormItem(item))
          : this.initFormItem(children)}
        {this.renderButton()}
      </Form>
    ) : (
      <div />
    );
  }
}
