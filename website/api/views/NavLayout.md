# NavLayout

> 基于ANTD-Mobile-NavBar封装, 便于维护, 更多详情请移步至: [ANTD-Mobile-NavBar](https://ANTD-design.gitee.io/components/drawer-cn/)

_tips: 仅适用Mobile端_

```jsx
export default function NavLayout(props) {
    const {title, children, showReturn = true, mode = 'light', rightContent, hasScroll = false, onReturn} = props;
    return (
        <div className={styles.root}>
            <NavBar
                className={mode == 'light' ? 'am-navbar' : 'am-navbar-drak'}
                rightContent={rightContent}
                icon={showReturn && <Icon type="left" size={'lg'}/>}
                onLeftClick={() => {
                    if (onReturn) onReturn();
                    else router.goBack();
                }}
            >{title}</NavBar>
            {hasScroll ? children : <ScrollView>{children}</ScrollView>}
        </div>
    );
}
```
