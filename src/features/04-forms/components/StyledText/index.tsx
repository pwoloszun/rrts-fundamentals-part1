import React, { Component } from 'react';

import styles from './styles.module.css';

interface StyledTextState {
  exampleText: string | undefined;
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
}

export default class StyledText extends Component<{}, StyledTextState> {
  constructor(props = {}) {
    super(props);
    this.state = {
      exampleText: 'Lorem ipsum...',
      isBold: false,
      isUnderline: false,
      isItalic: false
    };
  }

  render() {
    const { exampleText, isBold, isItalic, isUnderline } = this.state;
    return (
      <div className={styles.styledText}>
        <h3>StyledText</h3>
        <p className={this.cssClasses()}>{exampleText}</p>
        <div>
          <div>
            <label>
              <input
                checked={isBold}
                onChange={this.toggleCssClassHandler.bind(this, 'isBold')}
                type="checkbox"
              />
              Bold
            </label>
          </div>
          <div>
            <label>
              <input
                checked={isItalic}
                onChange={this.toggleCssClassHandler.bind(this, 'isItalic')}
                type="checkbox"
              />
              Italic
            </label>
          </div>
          <div>
            <label>
              <input
                checked={isUnderline}
                onChange={this.toggleCssClassHandler.bind(this, 'isUnderline')}
                type="checkbox"
              />
              Underline
            </label>
          </div>
        </div>
      </div>
    );
  }

  private toggleCssClassHandler(type: keyof StyledTextState) {
    this.setState((state) => {
      return {
        [type]: !state[type]
      } as any;
    });
  }

  private cssClasses() {
    const { isBold, isItalic, isUnderline } = this.state;
    const classes = [];
    if (isBold) {
      classes.push(styles.makeBold);
    }
    if (isItalic) {
      classes.push(styles.myItalic);
    }
    if (isUnderline) {
      classes.push(styles.addUnderline);
    }
    return classes.join(' ');
  }
}
