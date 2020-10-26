import DataApiService from './data-api.service';

import { Todo } from '../models/todo';

const url = `/api/todos`;
const api = new DataApiService<Todo>(url);

export default api;
