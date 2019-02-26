# DescriptionView

> 文案预览, 左右分化

_tips: 仅适用Web端_

```jsx
export default function DescriptionView({colSpan = 12, title, content}) {

    const defaultStyle = {
        fontSize: 14,
        lineHeight: '22px',
        marginBottom: 7,
        color: 'rgba(0,0,0,0.65)',
        display: 'flex',
    };

    const defaultTitle = {
        marginRight: 8,
        display: 'inline-block',
        color: 'rgba(0,0,0,0.85)',
    };

    return (
        <Col span={colSpan}>
            <div style={defaultStyle}>
                <p style={defaultTitle}>{title}:</p>
                <span>{content}</span>
            </div>
        </Col>
    );
}
```
