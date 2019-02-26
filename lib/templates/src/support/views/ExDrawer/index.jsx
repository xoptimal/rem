
/**
 *
 * Created by Freddie on 2018/09/04
 * Description: 封装ANTD-Drawer, 便于维护
 */

import React from 'react';
import {Drawer} from 'antd';


export default function ExDrawer(props) {

    const {
        visible = false,
        maskClosable = true,
        title,
        width = 520,
        onClose,
    } = props;

    const defaultStyle = {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        paddingBottom: 53,
    };

    return (
        <Drawer
            placement="right"
            maskClosable={maskClosable}
            destroyOnClose={true}
            visible={visible}
            style={defaultStyle}
            onClose={onClose}
            width={width}
            title={title}>
            {props.children}
        </Drawer>
    );
}
