import React, { Component } from 'react';

import styles from './styles.module.css';

import MyTestingPanel from './MyTestingPanel';
import BasicModal, { BasicModalProps } from './BasicModal';
import FancyModal from './FancyModal';

export default class RenderPropsExample extends Component {
  render() {
    const basicRender = (props: BasicModalProps) => {
      return <BasicModal {...props} />
    };
    const fancyRender = (props: BasicModalProps) => {
      return <FancyModal {...props} />
    };

    // TODO: children function

    return (
      <div className={styles.myExample}>
        <MyTestingPanel render={basicRender} />
        <hr />
        <MyTestingPanel render={fancyRender} />
      </div>
    );
  }
}
