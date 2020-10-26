import React, { Component } from 'react';

import styles from './index.module.css';

export default class Modal extends Component<{ text: string; }> {
  render() {
    const { text } = this.props;

    return (
      <div className={styles.modal}>
        <h5>{text}</h5>
      </div>

    );
  }
}
