import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

interface OnCreateParams {
  title: string;
  description?: string;
}

interface TodoFormProps {
  onCreateClick: (params: OnCreateParams) => void;
}

export default class TodoForm extends Component<TodoFormProps> {

  private titleInputRef: React.RefObject<HTMLInputElement>;
  private descriptionInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: TodoFormProps) {
    super(props);
    this.titleInputRef = React.createRef();
    this.descriptionInputRef = React.createRef();
  }

  render() {
    return (
      <Card>
        <Card.Header>Create Todo Form</Card.Header>
        <Card.Body>
          <Form onSubmit={this.handleSubmitClick}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={this.titleInputRef}
                type="text"
                placeholder="Enter title" />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description (optional)</Form.Label>
              <Form.Control ref={this.descriptionInputRef}
                type="text"
                placeholder="Enter description" />
            </Form.Group>

            <Button variant="primary"
              type="submit">Create</Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }

  handleSubmitClick = (event: any) => {
    event.preventDefault();
    const { onCreateClick } = this.props;
    const title = (this.titleInputRef.current as HTMLInputElement).value;
    const description = (this.descriptionInputRef.current as HTMLInputElement).value;
    onCreateClick({ title, description });
  };
}
