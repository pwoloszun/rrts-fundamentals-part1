import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

import styles from './styles.module.css';

interface FancyModalProps {
  isPassed: boolean;
  message: string | null;
}

export default class FancyModal extends Component<FancyModalProps> {
  render() {
    const { isPassed, message } = this.props;

    let btn;
    if (isPassed) {
      btn = <Button variant="success">Success</Button>;
    } else {
      btn = <Button variant="danger">Failure</Button>;
    }


    return (
      <Card style={{ width: '18rem' }} className={styles.fancyModal}>
        <Card.Header >
          {isPassed ? 'Success' : 'Error!'}
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {message}
          </Card.Title>
          <Card.Text>
            {
              btn
            }
            Lorem ipsum... {Math.random()}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
