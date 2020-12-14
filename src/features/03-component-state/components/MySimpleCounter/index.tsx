import React, { Component } from 'react';

import styles from './styles.module.css';

interface Props {
}

interface State {
  value: number;
}

export default class MySimpleCounter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: 100
    };
  }

  render() {
    return (
      <div className={styles.mySimpleCounter}>
        TODO_PLACEHOLDER
        <button>incr</button>
      </div>
    );
  }

  private incrementHandler = () => {
    // TODO
  };
}
