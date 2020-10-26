import React, { Component } from 'react';

import styles from './styles.module.css';

interface OptionPickerProps {
  label: string;
  options: string[];
  optionSelect: (option: string) => void;
}

export default class OptionPicker extends Component<OptionPickerProps> {
  render() {
    const { label, options } = this.props;
    const btns = options.map((option) => {
      return (
        <button key={option} onClick={() => this.optionClickHandler(option)}>
          {option}
        </button>
      );
    });

    return (
      <div className={styles.optionPicker}>
        <span>{label}</span>
        {btns}
      </div>
    );
  }

  private optionClickHandler(option: string) {
    const { optionSelect } = this.props;
    optionSelect(option);
  }
}
