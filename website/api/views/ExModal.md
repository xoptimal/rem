# ExModal

> 基于ANTD-Modal封装, 便于维护, 更多详情请移步至: [ANTD-Modal](https://ANTD-design.gitee.io/components/modal-cn/)

_tips: 仅适用Web端_


```jsx
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
```
