import React from 'react';

import todoService from './services/todo-service';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { TodoParams, Todo } from './services/todo.models';

interface TodosState {
  todos: Todo[];
}

export default class Todos extends React.Component<{}, TodosState> {
  private unsubscribe: any;

  constructor(props = {}) {
    super(props);
    const { todos } = todoService;
    this.state = {
      todos
    };
    this.unsubscribe = todoService.subscribe(() => {
      const { todos } = todoService;
      this.setState({ todos });
    });
  }

  render() {
    const { todos } = this.state;
    const { handleRemoveClick, handleCreateClick } = this;

    return (
      <div style={{ width: '75%', margin: '0 auto' }}>
        <h3>Todos Feature</h3>
        <div>
          <TodoList
            todos={todos}
            onRemoveClick={handleRemoveClick}
          />
        </div>
        <hr />
        <div>
          <TodoForm
            onCreateClick={handleCreateClick}
          />
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleRemoveClick = (todo: Todo) => {
    todoService.removeTodo(todo);
  };

  handleCreateClick = ({ title, description }: TodoParams) => {
    todoService.createTodo({ title, description });
  };
}
