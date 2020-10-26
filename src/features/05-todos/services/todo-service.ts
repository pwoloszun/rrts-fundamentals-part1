import createObservableService from '../../../services/create-observable-service';

import { TODOS_DATA } from '../data/todos-data';
import { TodoParams, Todo } from './todo.models';

const todoService = createObservableService({
  todos: TODOS_DATA,

  createTodo({ title, description }: TodoParams) {
    this.todos.push({ title, description, id: Math.random() });
    this._notifyListeners();
  },

  removeTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
    this._notifyListeners();
  }
});

export default todoService;
