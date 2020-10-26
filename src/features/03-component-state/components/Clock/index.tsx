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
        TODO_PLACEHOLDER
        <button>incr</button>
      </div>
    );
  }

  private incrementHandler = () => {
    // TODO
  };
}
