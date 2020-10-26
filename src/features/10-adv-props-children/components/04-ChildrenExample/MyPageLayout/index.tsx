import React, { Component } from 'react';

import styles from './styles.module.css';

export default class MyPageLayout extends Component {
  render() {
    return (
      <div className={styles.myComp}>
        <h3>MyPageLayout</h3>
        <div className={styles.content}>
          {
            this.props.children
          }
        </div>
      </div>
    );
  }
}
