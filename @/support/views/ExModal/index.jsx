import React from 'react';
import {Modal} from 'antd';


export default function ExModal(props) {

    const {
        visible,
        title,
        okText = '提交',
        params = {},
        checkSubmit,
        onClose,
        loadingToHandle,
        width = 520,
        hideFooter = false
    } = props;

    const temp = {};
    if (hideFooter) temp.footer = null;

    return <Modal
        {...temp}
        visible={visible}
        title={title}
        width={width}
        onCancel={onClose}
        okText={okText}
        confirmLoading={loadingToHandle}
        onOk={checkSubmit}
        {...params}>
        {props.children}
    </Modal>;
}
