import React from 'react';
import { ListGroup, Button, Row, Col, } from 'react-bootstrap';

import { Todo } from '../../services/todo.models';

interface TodoListProps {
  todos: Todo[];
  onRemoveClick: (todo: Todo) => void;
}

export default function (props: TodoListProps) {
  const { todos, onRemoveClick } = props;

  return (
    <ListGroup>
      {
        todos.map((todo: Todo) => {
          const { id, title, description } = todo;
          return (
            <ListGroup.Item key={id}>
              <Row>
                <Col sm={8}>
                  <h5>{title}</h5>
                  <small>{description}</small>
                </Col>
                <Col sm={4}>
                  <Button
                    onClick={() => {
                      onRemoveClick(todo)
                    }}
                    variant="danger"
                    size="sm"
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          );
        })
      }
    </ListGroup>
  );
}
