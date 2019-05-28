/**
 *
 * Created by Freddie on 2018/5/25 0025.
 * Description:
 */
import React, { createRef } from 'react';
import { Icon, ListView, PullToRefresh } from 'antd-mobile';
import ReactDOM from 'react-dom';
import styles from './index.less';
import { getDrawable, IMG_EMPTY } from '../../config/resource';

export default class ExListView extends React.PureComponent {
  state = {
    height: (document.documentElement.clientHeight * 3) / 4,
    ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
  };

  /**
   * 初始化
   * */
  constructor(props) {
    super(props);
    this.rcv = createRef();
  }

  componentDidMount() {
    this.resetHeight();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.resetHeight();
  }

  /**
   * 重置高度
   * */
  resetHeight() {
    const clientHeight = document.documentElement.clientHeight;
    let height = clientHeight - ReactDOM.findDOMNode(this.rcv.current).offsetTop;
    const scrollHeight = ReactDOM.findDOMNode(this.rcv.current).scrollHeight;
    const fullScreen = scrollHeight - height > 0;
    this.setState({ height, fullScreen });
  }

  /**
   * 加载更多
   * */
  renderLoadMore() {
    const { LMStatus = 0, onLoadMore, list = [] } = this.props;
    const { fullScreen = false } = this.state;

    switch (LMStatus) {
      case 1:
        return (
          <div className={styles.loadMore}>
            <Icon type={'loading'} />
            <span>正在加载中...</span>
          </div>
        );
      case 2:
        return (
          <div className={styles.loadMore} onClick={onLoadMore}>
            加载失败,请点击重试
          </div>
        );
      case 3:
        return fullScreen && <div className={styles.loadMore}>一 已经到底啦 一</div>;
      case 0:
        return (
          list.length > 0 && (
            <div className={styles.loadMore} onClick={onLoadMore}>
              点击加载更多
            </div>
          )
        );
    }
  }

  /**
   * 滑动底部回调
   * */
  onEndReached = event => {
    const { LMStatus = 0, onLoadMore, LMAutomatic = true } = this.props;
    if (LMStatus == 0 && LMAutomatic) onLoadMore();
  };

  /**
   * 加载空界面
   * */
  renderEmptyView(value) {
    return (
      <div className={styles.row_empty} key={'header-key-empty'}>
        <img src={getDrawable(IMG_EMPTY)} />
        <span>{value}</span>
      </div>
    );
  }

  /**
   * 加载ListView
   * */
  render() {
    const {
      onRefresh,
      refreshing = false,
      loadMore = true,
      isComplete = true,
      showEmpty = true,
      emptyValue = '暂无数据',
      renderRow,
      list = [],
      renderHeader,
    } = this.props;

    const { height, ds } = this.state;

    let params = {};

    if (onRefresh) {
      params.pullToRefresh = (
        <PullToRefresh refreshing={refreshing} onRefresh={onRefresh.bind(this)} />
      );
    }

    let header = [];

    if (renderHeader) {
      header.push(renderHeader());
    }

    if (list.length === 0 && showEmpty && isComplete) {
      header.push(this.renderEmptyView(emptyValue));
    }

    if (header.length > 0) {
      params.renderHeader = () => header;
    }

    if (loadMore) {
      params.renderFooter = () => this.renderLoadMore();
    }

    return (
      <ListView
        ref={this.rcv}
        {...params}
        dataSource={ds.cloneWithRows(list)}
        renderBodyComponent={() => <div style={{ minHeight: height }}>{this.props.children}</div>}
        renderRow={renderRow}
        style={{ height, overflow: 'auto' }}
        pageSize={10}
        initialListSize={20}
        onEndReachedThreshold={10}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
      />
    );
  }
}
