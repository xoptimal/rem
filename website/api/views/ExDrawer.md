# ExDrawer

> 基于ANTD-Drawer封装, 便于维护, 更多详情请移步至: [ANTD-Drawer](https://ANTD-design.gitee.io/components/drawer-cn/)

_tips: 仅适用Web端_

```jsx
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
```
