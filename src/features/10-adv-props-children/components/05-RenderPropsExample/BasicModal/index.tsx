import React, { Component } from 'react';

import styles from './styles.module.css';

export interface BasicModalProps {
  isPassed: boolean;
  message: string | null;
}

export default class BasicModal extends Component<BasicModalProps> {
  render() {
    const { isPassed, message } = this.props;
    const cssStyles = [styles.basicModal];
    if (isPassed) {
      cssStyles.push(styles.success);
    } else {
      cssStyles.push(styles.failure);
    }
    return (
      <div className={cssStyles.join(' ')}>
        Result: {message}
      </div>
    );
  }
}
