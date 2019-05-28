/**
 *
 * Created by Freddie on 2018/5/25 0025.
 * Description:
 */

import { Icon, NavBar } from 'antd-mobile';
import router from 'umi/router';
import styles from './index.less';
import React from 'react';
import ScrollView from '../ScrollView/index';

export default function NavLayout(props) {
  const {
    title,
    children,
    showReturn = true,
    mode = 'light',
    rightContent,
    hasScroll = false,
    onReturn,
  } = props;
  return (
    <div className={styles.root}>
      <NavBar
        className={mode == 'light' ? 'am-navbar' : 'am-navbar-drak'}
        rightContent={rightContent}
        icon={showReturn && <Icon type="left" size={'lg'} />}
        onLeftClick={() => {
          if (onReturn) onReturn();
          else router.goBack();
        }}
      >
        {title}
      </NavBar>
      {hasScroll ? children : <ScrollView>{children}</ScrollView>}
    </div>
  );
}
