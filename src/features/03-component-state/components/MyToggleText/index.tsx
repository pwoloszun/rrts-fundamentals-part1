import React, { Component } from 'react';

import styles from './index.module.css';

interface MyToggleTextState {
  isVisible: boolean;
}

export default class MyToggleText extends Component<{}, MyToggleTextState> {
  constructor(props = {}) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  render() {
    const { isVisible } = this.state;
    const btnCssClasses = ['btn'];
    let labelText = 'Show';
    let textContent = null;
    if (isVisible) {
      btnCssClasses.push('btn-danger');
      labelText = 'Hide';
      textContent = (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus nisi eu sapien finibus elementum. Integer
          porta mi orci, congue malesuada velit varius eu. Fusce quis ante fermentum, tempus nisi nec, luctus neque.
          Maecenas in laoreet ante, aliquet rutrum justo. Phasellus placerat felis erat, et dapibus libero mollis eget.
          Nunc nec dictum lacus. Fusce congue nisi sit amet tristique vestibulum. Aenean congue diam eu lectus laoreet
          molestie. Morbi leo odio, gravida quis hendrerit non, volutpat eget quam. Nulla sagittis lacus sit amet diam
          lacinia sodales. In fermentum elementum interdum. Donec sit amet venenatis augue. Aliquam suscipit sagittis
          mauris sed vestibulum. Donec facilisis vestibulum venenatis. Proin venenatis libero vel feugiat ultrices.
        </p>
      );
    } else {
      btnCssClasses.push('btn-primary');
    }

    return (
      <div className={styles.myToggleText}>
        <button onClick={this.toggleVisibilityHandler} className={btnCssClasses.join(' ')}>
          Toggle {labelText}
        </button>
        <hr />
        {textContent}
      </div>
    );
  }

  private toggleVisibilityHandler = () => {
    this.setState(({ isVisible }) => {
      return {
        isVisible: !isVisible,
      };
    });
  };
}
