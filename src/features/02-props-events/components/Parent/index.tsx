import React, { Component } from 'react';

import ParentChild from '../ParentChild';

import styles from './styles.module.css';

export default class Parent extends Component {
  render() {
    const parentMsg = `Parent ${Math.random() * 50}`;

    return (
      <div className={styles.parent}>
        <h3>Parent</h3>
        <p>
          Parent: {parentMsg}
        </p>
        <div>
          <ParentChild
            text={parentMsg}
            messageSent={this.logMessageHandle}
          />
        </div>
      </div>
    );
  }

  logMessageHandle = (message: string) => {
    console.log('parent received', message);
  }
}
