import React, { Component } from 'react';

import styles from './styles.module.css';

interface ParentChildProps {
  text: string;
  messageSent: (message: string) => void;
}

export default class ParentChild extends Component<ParentChildProps> {
  render() {
    const { text } = this.props;

    return (
      <div className={styles.parentChild}>
        <h3>Child</h3>
        <div>
          <p>
            Child received: {text}
          </p>
        </div>
        <div>
          <button onClick={this.sendMessageHandle}>Send</button>
        </div>
      </div>
    );
  }

  sendMessageHandle = () => {
    const { messageSent } = this.props;
    messageSent(`child msg: ${Math.random()}`);
  }
}
