import React, { Component } from 'react';

import styles from './styles.module.css';

interface OptionPickerProps {
  label: string;
  options: string[];
  optionSelect: (option: string) => void;
}

export default class OptionPicker extends Component {
  render() {
    return (
      <div className={styles.optionPicker}>
        <span>TODO_PLACEHOLDER</span>
      </div>
    );
  }
}
