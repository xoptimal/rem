/**
 *
 * Created by Freddie on 2018/09/04
 * Description: Mobile端列表继承类
 */


import React from 'react';
import NetComponent from './NetComponent';
import ExListView from '../views/ExListView/index';
import {checkResponseResult, defaultListParams, hasLoadMore} from '../config/index';
import NavLayout from '../views/NavLayout/index';
import NetLayout from '../views/NetLayout/index';


export default class ListViewComponent extends NetComponent {

    /**
     * 查询请求携带参数,
     * tips: 请务必重写该方法,否则影响请求
     * */
    queryListParams() {
        return {path: null, params: null};
    }

    /**
     * 查询请求携带参数
     * tips: 不建议重写该方法,请优先重写queryListParams()方法
     * */
    queryParams() {
        let temp = this.queryListParams();
        temp.params = {...temp.params, ...defaultListParams(this.state.page)};
        return temp;
    }

    /**
     * ListView Item实现方法
     * tips: 请务必重写该方法, 否则影响数据展示
     * */
    renderListItemView(rowData, sectionID, rowID) {
        return null;
    };

    /**
     * onRefresh方法触发前更新State数据集
     * */
    onBeforeRefreshUpdateState(loadingType) {
        return {loadingType, page: 1};
    }

    /**
     * 请求成功回调方法, 默认保留在state中
     * data: 回调接口数据
     * */
    onRefreshSuccess(data) {
        this.setState({...data, LMStatus: hasLoadMore(data) ? 0 : 3});
    }

    /**
     * 加载更多
     * tips: 不建议重写该方法, 如需重写请保留在原有基础上
     * */
    onLoadMore() {
        this.setState({page: this.state.page + 1, LMStatus: 1});
        this.props.dispatch({
            type: 'common/onRefresh',
            payload: {
                ...this.queryParams(),
                response: this.onLoadMoreResponse.bind(this),
            },
        });
    }

    /**
     * 加载更多回调
     * tips: 不建议重写该方法, 如需重写请保留在原有基础上
     * */
    onLoadMoreResponse(response) {
        const result = checkResponseResult(response);
        const {list, page} = this.state;
        const data = response.result;
        if (result) {
            this.setState({
                LMStatus: hasLoadMore(data) ? 0 : 3,
                list: [...list, ...data.list],
            });
        } else {
            this.setState({page: page - 1, LMStatus: 2});
        }
    }

    /**
     * 初始化ListView配置
     * */
    stepListView() {
        const {list = []} = this.state;
        return {list};
    }

    /**
     * 创建ListView
     * */
    renderListView() {
        const {loadingType = -1, LMStatus = 0} = this.state;
        const defaultParams = {
            automatic: true,
            LMStatus: LMStatus,
            refreshing: loadingType == 2,
            isComplete: loadingType == -1,
            renderRow: this.renderListItemView.bind(this),
            onRefresh: this.onRefresh.bind(this),
            onLoadMore: this.onLoadMore.bind(this),
        };
        return <ExListView {...defaultParams} {...this.stepListView()} />;
    }

    /**
     * 设置NavLayout, eg. {title: 'test', showReturn: true ...}
     * 更多配置, 请查阅 NavLayout
     * */
    stepNavLayout() {
        return null;
    }

    /**
     * 创建化顶部视图
     * */
    renderTopView() {
        return null;
    }

    /**
     * 创建化底部视图
     * */
    renderBottomView() {
        return null;
    }

    /**
     * 初始化 renderTopView, renderListView, renderBottomView
     * */
    renderContent() {
        return (
            <NetLayout {...this.initNetLayoutParams()}>
                {this.renderTopView()}
                {this.renderListView()}
                {this.renderBottomView()}
            </NetLayout>
        );
    }

    /**
     * tips: 不建议重写该方法, 如需重写请保留在原有基础上
     * */
    render() {
        const params = this.stepNavLayout();
        if (!!params) {
            return (
                <NavLayout {...params} hasScroll={true}>
                    {this.renderContent()}
                </NavLayout>
            );
        }
        return this.renderContent();
    }

}
