import React, { Component } from 'react';

import styles from './styles.module.css';

export default class HelloWorld extends Component {
  render() {
    const name = `Bob ${Math.random()}`;
    return (
      <div>
        <h3 className={styles.helloWorld}>
          Hello {name}
        </h3>
      </div>
    );
  }
}
