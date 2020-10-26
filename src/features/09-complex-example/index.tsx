import React from 'react';

import styles from './index.module.css';
import Modal from './components/Modal';
import { fakeApiService } from './api/fake-api.service';
import MySpinner from '../../components/MySpinner';

const formattedErrorMsg = function (error: Error, seconds: number): string {
  return `Error occurred: ${error.message} (${seconds})`;
};

interface ComplexExampleState {
  isLoading: boolean;
  data: any;
  errorMessage: string | null;
}

export default class ComplexExample extends React.Component<{}, ComplexExampleState> {
  constructor(props = {}) {
    super(props);

    this.state = {
      isLoading: false,
      data: null,
      errorMessage: null
    };
  }

  render() {
    const { data, errorMessage, isLoading } = this.state;
    let mainContent = null;
    if (errorMessage) {
      mainContent = (<Modal text={errorMessage} />);
    } else if (isLoading) {
      mainContent = (<MySpinner text="Loading..." />);
    } else if (data) {
      mainContent = (<pre>{JSON.stringify(data, null, 2)}</pre>);
    }

    return (
      <div className="d-flex d-flex-column justify-content-around">
        <div className={styles.mainCont}>
          <h3>Complex Example</h3>
          {mainContent}
          <button onClick={this.sendRequest}>Run</button>
        </div>
      </div>
    );
  }

  private showModal(error: Error, durationInSec: number) {
    let secLeft = durationInSec;
    this.setState({ errorMessage: formattedErrorMsg(error, secLeft) });
    const intervalId = setInterval(() => {
      secLeft--;
      let errorMessage = null;
      if (secLeft > 0) {
        errorMessage = formattedErrorMsg(error, secLeft);
      } else {
        clearInterval(intervalId);
      }
      this.setState({ errorMessage });
    }, 1000);
  }

  sendRequest = () => {
    this.setState({ isLoading: true });
    fakeApiService.retryFailedRequest('/user/data', 2)
      .then((data: any) => {
        this.setState({ data, errorMessage: null });
      })
      .catch((error: Error) => {
        this.showModal(error, 9);
        fakeApiService.successfulRequest('/log/error', error);
      })
      .then(() => { // finally
        this.setState({ isLoading: false });
      });
  };
}
