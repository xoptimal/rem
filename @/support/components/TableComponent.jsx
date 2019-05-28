/**
 *
 * Created by Freddie on 2018/09/04
 * Description: WEB端通用表格操作继承类
 */

import React from 'react';
import { Button, Divider, Popconfirm, Table } from 'antd';
import { checkAuthority, PAGE_SIZE } from '../config/index';
import { transformComponent } from '../utils/ViewHelper';
import { parseListData } from '../config';

export default class TableComponent extends React.Component {
  defaultRowSelection() {
    const { selectedRowKeys = [] } = this.state;
    return {
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => this.setState({ selectedRowKeys }),
    };
  }

  /**
   * 多选参数配置
   * */
  rowSelection() {
    // 建议重写该方法, 用于判断是否为可选项
    // getCheckboxProps: record => ({
    //   disabled: record.name === 'Disabled User', // Column configuration not to be checked
    //   name: record.name,
    // }),
    return {};
  }

  /**
   * 多选触发按钮, 可以根据具体喜好进行调整或者重写
   * */
  renderRowSelectionButton(onHandle, keyword = '删除', hasConfirm = true) {
    const { selectedRowKeys = [] } = this.state;
    const buttonProps = { style: { marginRight: 8 }, type: 'primary' };
    return (
      selectedRowKeys.length > 0 &&
      (hasConfirm ? (
        <Popconfirm
          onConfirm={onHandle}
          title={`您确定要${keyword}${selectedRowKeys.length}数据吗?`}
        >
          <Button {...buttonProps}>
            批量{keyword}
            {selectedRowKeys.length}条数据
          </Button>
        </Popconfirm>
      ) : (
        <Button {...buttonProps} onClick={onHandle}>
          批量{keyword}
          {selectedRowKeys.length}条数据
        </Button>
      ))
    );
  }

  /**
   * 设置表格唯一标识
   * */
  rowKey(record, position) {
    return record.id || position + '';
  }

  /**
   * 初始化Table组件
   * */
  initTableView() {
    const { showPagination = true, showRowSelection = false } = this.state;
    const { dataSource, loading = false, page } = this.props;

    const { total, list } = parseListData(dataSource);

    const tableParams = {
      loading,
      dataSource: list,
      rowKey: this.rowKey.bind(this),
      onChange: this.onTableChange.bind(this),
      pagination: showPagination && { defaultPageSize: PAGE_SIZE, total: total, current: page },
    };
    if (showRowSelection) {
      tableParams.rowSelection = { ...this.defaultRowSelection(), ...this.rowSelection() };
    }
    return <Table {...tableParams} {...this.stepTableFields()} />;
  }

  /**
   * 设置Table属性, 详情查看ANTD-table: https://ANTD-design.gitee.io/components/table-cn/
   * tips: 请务必重写该方法,否则影响表格使用
   * */
  stepTableFields() {
    return { columns: [] };
  }

  /**
   * 分页、排序、筛选变化时触发, 详情查看ANTD-table: https://ANTD-design.gitee.io/components/table-cn/
   * */
  onTableChange({ pageSize, current }, filters, sorter) {
    const { list, total } = this.state;
    if (list.length() == total) {
      this.setState({ page: current });
    } else {
      this.setState({ page: current }, () => this.onRefresh());
    }
  }

  /**
   * 加载表格
   * */
  render() {
    return this.initTableView();
  }

  /**
   * Action相关组件点击时触发
   * */
  onClickAction(actionKey, selectedData) {
    this.setState({ actionKey, selectedData });
  }

  /**
   * 初始化操作栏
   * */
  initActionColumns(columns, authorities, params = {}) {
    if (checkAuthority(authorities)) {
      columns.push({
        title: '操作',
        key: 'action',
        ...params,
        render: (text, record) => this.formatActionView(this.stepTableActionFields(record)),
      });
    }
    return columns;
  }

  /**
   * 格式化操作栏,增加分割线, 以及权限判断
   * */
  formatActionView(actions) {
    if (actions && Array.isArray(actions)) {
      let temp = [];
      for (let i = 0; i < actions.length; i++) {
        if (checkAuthority(actions[i].authority)) {
          temp.push(transformComponent(actions[i]));
          if (i < actions.length - 1) {
            temp.push(<Divider key={'d_' + i} type="vertical" />);
          }
        }
      }
      return temp;
    } else if (actions) {
      return checkAuthority(actions.authority) && transformComponent(actions);
    }
    return null;
  }

  /**
   * 设置操作栏功能(增删改查)
   * */
  stepTableActionFields(record) {
    const actions = [];
    /**
     * eg.
     *    actions.push(this.createTextView(record));
     * */
    return actions;
  }
}
