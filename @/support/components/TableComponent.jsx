/**
 *
 * Created by Freddie on 2018/09/04
 * Description: WEB端通用表格操作继承类
 */


import React from 'react';
import {Button, Divider, Input, Popconfirm, Table} from 'antd';
import NetComponent from './NetComponent';
import {PAGE_SIZE} from '../config/index';
import {checkAuthority, defaultListParams, parseListData} from '../config/index';

const {Search} = Input;

export default class TableComponent extends NetComponent {

    /** eg. request and response, you need reset queryParams and onRefreshSuccess method **/

    /**
     * 查询请求携带参数
     * tips: 不建议重写该方法,请优先重写queryListParams()方法
     * */
    queryParams() {
        let temp = this.queryListParams();
        const {page = 1} = this.state;
        temp.params = {...temp.params, ...defaultListParams(page)};
        return temp;
    }

    /**
     * 查询请求携带参数,
     * tips: 请务必重写该方法,否则影响请求
     * */
    queryListParams() {
        return {path: null, params: null};
    }

    /**
     * 请求成功回调方法, 默认保留在state中
     * data: 回调接口数据
     * */
    onRefreshSuccess(data) {
        this.setState(parseListData(data));
    }

    /**
     * 初始化Table组件
     * */
    initTableView() {
        const {list = [], total = 0, loading = false, page = 1, showPagination = true} = this.state;
        return (
            <Table
                dataSource={list}
                rowKey={(record, position) => position}
                loading={loading}
                onChange={this.onTableChange.bind(this)}
                pagination={showPagination && {defaultPageSize: PAGE_SIZE, total: total, current: page}}
                {...this.stepTableParams()} />
        );
    }

    /**
     * 设置Table属性, 详情查看ANTD-table: https://ANTD-design.gitee.io/components/table-cn/
     * tips: 请务必重写该方法,否则影响表格使用
     * */
    stepTableParams() {
        return {columns : []};
    }

    /**
     * 分页、排序、筛选变化时触发, 详情查看ANTD-table: https://ANTD-design.gitee.io/components/table-cn/
     * */
    onTableChange({pageSize, current}, filters, sorter) {
        const {list, total} = this.state;
        if (list.length() == total) {
            this.setState({page: current});
        } else {
            this.setState({page: current}, () => this.onRefresh());
        }
    }

    /**
     * 加载表格
     * */
    render() {
        return this.initTableView();
    }

    /** about actions **/

    /**
     * 创建ANTD-Search组件
     * */
    createSearchView(searchPlaceholder) {
        return <Search
            placeholder={searchPlaceholder}
            style={{width: 200, marginBottom: 16, marginRight: 8}}
            onSearch={this.onClickSearch.bind(this)}/>;
    }

    /**
     * 创建ANTD-Button组件
     * */
    createButtonView(name = '添加', styles = {}) {
        return <Button type={'primary'}
                       style={styles}
                       onClick={() => this.onClickAction(null, 1)}>{name}</Button>;
    }

    /**
     * 创建文本
     * */
    createTextView(data, name = '修改', key = 'a1', type = 2) {
        return (<a key={key} onClick={() => this.onClickAction(data, type)}>{name}</a>);
    }

    /**
     * 创建ANTD-Popconfirm组件
     * */
    createPopconfirmView(payload, name = '删除', title = '你确定要删除吗?') {
        return (<Popconfirm key={'a2'}
                            title={title}
                            onConfirm={() => this.onHandle(payload, 0)}
                            okText="确定"
                            cancelText="取消">
                <a>{name}</a>
            </Popconfirm>
        );
    }

    /**
     * Action相关组件点击时触发
     * */
    onClickAction(selData, type) {
        this.setState({visible: true, selData, type});
    }

    /**
     * 点击/回车搜索时触发
     * */
    onClickSearch(value) {
        this.setState({search: value, page: 1, total: 1}, () => this.onRefresh());
    }

    /**
     * 初始化操作栏
     * */
    initActionView(columns, authorities, params = {}) {
        if (checkAuthority(authorities)) {
            columns.push({
                title: '操作',
                key: 'action',
                ...params,
                render: (text, record) => this.formatActionView(this.stepActionView(record)),
            });
        }
        return columns;
    }

    /**
     * 格式化操作栏,增加分割线
     * */
    formatActionView(operation) {
        let temp = [];
        if (operation && Array.isArray(operation)) {
            for (let i = 0; i < operation.length; i++) {
                if (i > 0 && i + 1 <= operation.length) {
                    temp.push(<Divider key={'d_' + i} type="vertical"/>);
                }
                temp.push(operation[i]);
            }
            return temp;
        } else if (operation) {
            return operation;
        }
        return null;
    }


    /**
     * 设置操作栏功能(增删改查)
     * */
    stepActionView(record) {
        const actions = [];
        /**
         * eg.
         *    actions.push(this.createTextView(record));
         * */
        return actions;
    }

}
