import React from "react";
import PropTypes from 'prop-types';
import styles from './ExampleComponent.less';
import avatar from './assets/yay.jpg'

class ExampleComponent extends React.Component {
  render() {
    let {children} = this.props;
    console.log('styles', styles);
    return (<div className={styles.example}>
      <img src={avatar} className={styles.avatar} alt="avatar"/>
      {children}
    </div>)
  }

  static defaultProps = {
    children: null,
  };
  static propTypes = {
    children: PropTypes.string,
  }
}

export default ExampleComponent;
