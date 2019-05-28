import React from 'react';
import styles from './index.less';

export default function ScrollView(props) {
  return <div className={styles.content}>{props.children}</div>;

  /*state = {
      height: document.documentElement.clientHeight * 3 / 4,
    };

    constructor(props) {
      super(props);
      this.content = createRef();
    }

    componentDidMount() {
      this.setState({ height: ReactDOM.findDOMNode(this.content.current).offsetHeight });
    }

    render() {
      const { height } = this.state;
      return (
        <div ref={this.content} className={styles.content} style={{ height }}>
          {this.props.children}
        </div>
      );
    }*/
}
