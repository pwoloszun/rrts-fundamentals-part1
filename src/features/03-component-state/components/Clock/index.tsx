import React, { Component } from 'react';

import styles from './styles.module.css';

interface ClockState {
  value: number;
}

export default class Clock extends Component<{}, ClockState> {
  constructor(props = {}) {
    super(props);
    this.state = {
      value: 100
    };
  }

  render() {
    return (
      <div className={styles.clock}>
        {
          this.state.value
        }
        <button onClick={this.incrementHandler}>incr</button>
      </div>
    );
  }

  private incrementHandler = () => {
    this.setState((state) => {
      return {
        value: state.value + 1
      };
    });
  };
}
