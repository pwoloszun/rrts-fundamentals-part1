import React from 'react';
import { ListGroup, Button, Row, Col, } from 'react-bootstrap';

import { TodoParams, Todo } from '../../../../models/todo';

interface TodoListProps {
  todos: Todo[];
  onRemoveClick: (todo: Todo) => void;
}

export default function (props: TodoListProps) {
  return (
    <ListGroup>
      <ListGroup.Item>
        <Row>
          <Col sm={8}>
            <h5>TITLE_TODO</h5>
            <small>DESC_TODO</small>
          </Col>
          <Col sm={4}>
            <Button
              variant="danger"
              size="sm">
              Remove
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </ListGroup>
  );
}
