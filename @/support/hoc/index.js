/**
 * 订阅数据
 * */
import React, { Component } from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import {
  DEFAULT_LOADING_HANDLE_TYPE,
  defaultListParams,
  LOADING_REFRESH_TYPE,
  updatePropsWhetherToClearState,
  updatePropsWhetherToRefresh,
} from '../config';
import { connect } from 'dva';

const defaultState = {
  dataSource: undefined,
  loadType: -1,
  page: 1,
};

export const withFetch = (mapPropsToRequest, plural) => WrappedComponent => {
  @connect()
  class Enhance extends Component {
    state = defaultState;

    componentWillMount() {
      this.onRefresh();
    }

    componentWillReceiveProps(nextProps, nextContext) {
      if (updatePropsWhetherToRefresh(nextProps)) this.onRefresh(nextProps);
      if (updatePropsWhetherToClearState(this, nextProps)) this.setState(defaultState);
    }

    componentWillUnmount() {
      console.log('-------componentWillUnmount-------');
    }

    onRefresh(props) {
      const tempProps = props || this.props;
      const params =
        typeof mapPropsToRequest == 'function' ? mapPropsToRequest(tempProps) : mapPropsToRequest;
      if (!params) return;
      const { loadingType, type } = this.onRefreshParams();
      this.setState(this.onBeforeRefreshUpdateState(loadingType));
      const { location, dispatch } = this.props;
      const redirectPath = (location && location.pathname) || '/';
      const { page } = this.state;
      if (plural) params.body = { ...defaultListParams(page), ...params.body };
      dispatch({ type, payload: { ...params, redirectPath } })
        .then(result => this.onRefreshSuccess(result))
        .catch(e => this.onRefreshError(e))
        .finally(() => this.setState({ loadingType: -1 }));
    }

    onRefreshParams() {
      return {
        loadingType: LOADING_REFRESH_TYPE,
        type: 'common/onRefresh',
      };
    }

    onBeforeRefreshUpdateState(loadingType) {
      return { loadingType };
    }

    onRefreshSuccess(dataSource) {
      this.setState({ dataSource, loadingType: -1 });
    }

    onRefreshError(e) {
      console.log(e);
    }

    onHandle(payload, loadingType = DEFAULT_LOADING_HANDLE_TYPE, type = 'common/onHandle') {
      this.setState({ loadingType });
      payload.showMessage = true;
      return this.props
        .dispatch({ type, payload })
        .then(result => this.onHandleSuccess(result))
        .catch(e => this.onHandleError(e))
        .finally(() => this.setState({ loadingType: -1 }));
    }

    onHandleSuccess(data) {
      this.onRefresh();
    }

    onHandleError(e) {
      console.log(e);
    }

    render() {
      const { extraProps, ...restProps } = this.props;

      const { dataSource, loadingType } = this.state;

      const injectedProps = {
        dataSource,
        loading: loadingType === 1 || loadingType === 2,
        handleLoading: loadingType === 4 || loadingType === 5,
        onHandle: this.onHandle.bind(this),
        onRefresh: this.onRefresh.bind(this),
      };

      return <WrappedComponent {...restProps} {...injectedProps} />;
    }
  }

  Enhance.displayName = `withPreload(${getDisplayName(WrappedComponent)})`;

  /**
   * 自动拷贝所有非React静态方法
   * */
  hoistNonReactStatic(Enhance, WrappedComponent);

  return Enhance;
};

/**
 * 获取组件名称
 * */
const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};
