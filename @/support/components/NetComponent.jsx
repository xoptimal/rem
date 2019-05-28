/**
 *
 * Created by Freddie on 2018/09/04
 * Description: 通用网络请求处理继承类
 */

import React from 'react';
import {
  DEFAULT_AUTOMATIC,
  DEFAULT_LOADING_HANDLE_TYPE,
  LOADING_REFRESH_TYPE,
} from '../config/index';
import { exClose, exError, exLoading, exSuccess } from '../utils/ToastHelper';
import { formatMessage } from 'umi/locale';

export default class NetComponent extends React.Component {
  state = {
    automatic: DEFAULT_AUTOMATIC, //  是否开启自动查询请求
    loadingType: -1, // 加载方式: 1=弹出框, 2=下拉, 3=加载更多, 4=提交弹出框, 5=提交按钮
  };

  /**
   * 如需重写请保留在原有基础上, 确保自动加载正常
   * eg: super.componentDidMount();
   * */
  componentWillMount() {
    this.onRefresh();
  }

  /**
   * 用于检查当前页面是否请求失败过
   * tips: 需加载 eg.connect(state => state.common)使用
   * */
  checkRequestFailed() {
    const { path } = this.queryParams();
    const { requestFails = [] } = this.props;
    const filters = requestFails.filter(item => item.path == path);
    if (filters.length >= 1) {
      this.setState({ netInfo: filters[0] });
      return false;
    }
    return true;
  }

  /**
   * 请求参数.
   * return { url: 接口地址, body: 接口接收参数, bodyType: 接口参数类型(json/form-data) }
   * */
  queryParams() {
    return { url: null, body: null };
  }

  /**
   * onRefresh方法触发前更新State数据集
   * */
  onBeforeRefreshUpdateState(loadingType) {
    return { loadingType };
  }

  /**
   * 用于查询请求, 不建议重写该方法, 如需重写请保留在原有基础上
   * tips: 不建议重写该方法, 如需重写请保留在原有基础上
   * */
  onRefresh() {
    const { automatic = DEFAULT_AUTOMATIC } = this.state;
    const { url } = this.queryParams();
    if (!!url && this.checkRequestFailed()) {
      const {
        loadingType = LOADING_REFRESH_TYPE,
        type = 'common/onRefresh',
      } = this.onRefreshParams();
      this.setState(this.onBeforeRefreshUpdateState(loadingType), () => {
        const { location, dispatch } = this.props;
        dispatch({
          type,
          payload: {
            ...this.queryParams(),
            redirectPath: (location && location.pathname) || '/',
            callback: this.onRefreshCallback.bind(this),
          },
        });
      });
    }
  }

  /**
   * 刷新默认参数
   * */
  onRefreshParams() {
    return {
      loadingType: LOADING_REFRESH_TYPE,
      type: 'common/onRefresh',
    };
  }

  /**
   * onRefresh()回调方法
   * tips: 不建议重写该方法, 如需重写请保留在原有基础上
   * */
  onRefreshCallback(result) {
    this.setState({ loadingType: -1 }, () => {
      if (result.isSuccess) {
        this.onRefreshSuccess(result.data);
      } else {
        this.onRefreshFailure(result.error);
      }
    });
  }

  /**
   * 请求成功回调方法, 默认保留在state中
   * data: 回调接口数据
   * */
  onRefreshSuccess(data) {
    this.setState({ data });
  }

  /**
   * 请求失败回调方法, 默认采用全局handleResponseFail()方法处理
   * */
  onRefreshFailure(error) {
    exError(error.msg);
  }

  /**
   * 用于提交请求
   * tips: 不建议重写该方法, 如需重写请保留在原有基础上
   * */
  onHandle(payload, loadingType = DEFAULT_LOADING_HANDLE_TYPE, type = 'common/onHandle') {
    if (loadingType == 4) {
      exLoading(formatMessage({ id: 'handle.loading' }), 0);
    }
    this.setState({ loadingType }, () => {
      this.props.dispatch({
        type,
        payload: {
          ...payload,
          callback: this.onHandleCallback.bind(this),
        },
      });
    });
  }

  /**
   * 提交请求回调方法
   * tips: 不建议重写该方法, 如需重写请保留在原有基础上
   * */
  onHandleCallback(result) {
    this.setState({ loadingType: -1 }, () => {
      exClose();
      if (result.isSuccess) {
        this.onClose();
        exSuccess(result.msg || '操作成功');
        this.onHandleSuccess(result.data);
      } else {
        this.onHandleFailure(result.error);
      }
    });
  }

  /**
   * 提交请求成功回调方法, 默认采用刷新界面方式处理
   * */
  onHandleSuccess(data) {
    this.onRefresh();
  }

  /**
   * 提交请求失败回调方法, 默认采用全局handleResponseFail()方法处理
   * */
  onHandleFailure(error) {
    // handleResponseFail(response);
    exError(error.msg);
  }

  /**
   * 用于弹出框触发关闭回调方法
   * */
  onClose() {
    this.setState({ visible: false }, () => {
      setTimeout(() => this.setState({ actionKey: undefined }), 100);
    });
  }

  /**
   * 提交表单默认参数, 请结合WebForm捆绑使用.
   * */
  transformOptions(params = {}) {
    const { loadingType = -1, selData } = this.state;
    const temp = {
      onCancel: this.onClose.bind(this),
      onSubmit: this.onHandle.bind(this),
      loading: loadingType == 4 || loadingType == 5,
      data: selData,
      visible: this.visibleKey(params.key),
    };
    return { ...temp, ...params };
  }

  /**
   * NetLayout默认配置参数, 请结合NetComponent使用
   * */
  initNetLayoutParams() {
    const { loadingType = -1 } = this.state;
    return {
      loading: loadingType == 1,
      onClickRetry: this.onRefresh.bind(this),
    };
  }

  visibleKey(key) {
    const { visible, actionKey } = this.state;

    if (Array.isArray(key)) {
      const find = key.find(item => item == actionKey);
      return visible && find;
    } else {
      return visible && actionKey === key;
    }
  }
}
