import React, { Component } from 'react';

import styles from './styles.module.css';

interface RenderFnParams {
  message: string | null;
  isPassed: boolean;
}

interface MyTestingPanelProps {
  render: (params: RenderFnParams) => JSX.Element;
}

interface MyTestingPanelState {
  showModal: boolean;
  isPassed: boolean;
  message: string | null;
}

export default class MyTestingPanel extends Component<MyTestingPanelProps, MyTestingPanelState> {
  constructor(props: MyTestingPanelProps) {
    super(props);
    this.state = {
      showModal: false,
      isPassed: false,
      message: null
    };
  }

  render() {
    const { render } = this.props;
    const { showModal, isPassed, message } = this.state;
    return (
      <div className={styles.myExample}>
        <h3>MyTestingPanel</h3>
        <div>
          <div className={styles.modalContainer}>
            {showModal && render({ message, isPassed })}
          </div>
          <button onClick={this.handlePassClick} className={styles.success}>Pass</button>
          <button onClick={this.handleFailClick} className={styles.failure}>Fail</button>
          <button onClick={this.handleResetClick}>Reset</button>
        </div>
      </div>
    );
  }

  handlePassClick = () => {
    this.setState({
      showModal: true,
      isPassed: true,
      message: `Success ${Math.random()}`
    });
  };

  handleFailClick = () => {
    this.setState({
      showModal: true,
      isPassed: false,
      message: `Some Error!! ${Math.random()}`
    });
  };

  handleResetClick = () => {
    this.setState({
      showModal: false,
      isPassed: false,
      message: null
    });
  }

}
