import React from 'react';

// import TodoList from './components/TodoList';
// import TodoForm from './components/TodoForm';
// import { TODOS_DATA } from './data/todos-data';

import { TodoParams, Todo } from '../../models/todo';

interface Props {
}

interface State {
  todos: Todo[];
}

export default class TodosPage extends React.Component<Props, State> {
  // TODO: init local state

  render() {
    // TODO
    return (
      <div style={{ width: '75%', margin: '0 auto' }}>
        <h3>Todos Feature</h3>
        <div>
          {/*<TodoList*/}
          {/*  todos={TODOS_DATA}*/}
          {/*  onRemoveClick={this.handleRemoveClick}*/}
          {/*/>*/}
        </div>
        <hr />
        <div>
          {/*<TodoForm*/}
          {/*  onCreateClick={this.handleCreateClick}*/}
          {/*/>*/}
        </div>
      </div>
    );
  }

  handleRemoveClick = (todo: Todo) => {
    // TODO
  };

  handleCreateClick = ({ title, description }: TodoParams) => {
    // TODO
  };
}
