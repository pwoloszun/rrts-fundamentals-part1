import React, { Component } from 'react';

import styles from './styles.module.css';

export interface Props {
  initialValue: number;
}

interface State {
  value: number;
}

class MyCounter extends Component<Props, State> {
  static defaultProps = {
    initialValue: 0
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      value: this.props.initialValue
    };
  }

  render() {
    const { value } = this.state;

    return (
      <div className={styles.myCounter}>
        <h5>MyCounter</h5>
        <h2 data-testid='value'>Value: {value}</h2>
        <div>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState((state) => {
      return {
        value: state.value + 1
      };
    });
  };

  handleDecrement = () => {
    this.setState((state) => {
      return {
        value: state.value - 1
      };
    });
  };
}

export default MyCounter;
