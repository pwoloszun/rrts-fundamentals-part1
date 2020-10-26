import React, { Component } from 'react';

import styles from './styles.module.css';

interface QuadraticEquationState {
  a: number;
  b: number;
  c: number;
  delta: number;
  x1: number;
  x2: number;
}

export default class QuadraticEquation extends Component<{}, QuadraticEquationState> {
  constructor(props = {}) {
    super(props);
    this.state = {
      a: 2,
      b: 8,
      c: -10,
      delta: NaN,
      x1: NaN,
      x2: NaN
    };
  }

  render() {
    const { a, b, c, delta, x1, x2 } = this.state;
    return (
      <div className={styles.equation}>
        <h5>a * X^2 + b * X + c = 0</h5>
        <div>
          <label>a =</label>
          <input value={a} onChange={this.aChangeHandler} type='number' />
        </div>
        <div>
          <label>b =</label>
          <input value={b} onChange={this.bChangeHandler} type='number' />
        </div>
        <div>
          <label>c =</label>
          <input value={c} onChange={this.cChangeHandler} type='number' />
        </div>
        <div>
          <h5>Results</h5>
          <h6>delta = {delta}</h6>
          <h6>x1 = {x1}</h6>
          <h6>x2 = {x2}</h6>
        </div>
      </div>

    );
  }

  aChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const a = parseInt(event.target.value);
    this.setState({ a });
    this.calculateEquation();
  };

  bChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const b = parseInt(event.target.value);
    this.setState({ b });
    this.calculateEquation();
  };

  cChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const c = parseInt(event.target.value);
    this.setState({ c });
    this.calculateEquation();
  };

  calculateEquation() {
    this.setState(function (state) {
      const { a, b, c } = state;
      const delta = (b * b) - (4 * a * c);
      const deltaSqrt = Math.sqrt(delta);
      const doubleA = 2 * a;
      return {
        delta,
        x1: (b - deltaSqrt) / doubleA,
        x2: (-b - deltaSqrt) / doubleA
      };
    });
  }
}
