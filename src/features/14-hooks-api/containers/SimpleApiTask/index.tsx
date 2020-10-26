import React from 'react';

import useFetch from '../../hooks/useFetch';
import api from '../../../../api/todos';
import { Todo } from '../../../../models/todo';

function renderContent(data: Todo[], isLoading: boolean) {
  if (isLoading) {
    return (<span>Loading...</span>);
  } else {
    return (<ul>
      {
        data.map(({ title, id }) => <li key={id}>{title}</li>)
      }
    </ul>);
  }
}

export default function SimpleApiTask() {
  const {
    data,
    fetchData,
    isLoading,
  } = useFetch(api);

  const fetchTodoHandler = () => fetchData();
  let content = renderContent(data, isLoading);

  return (
    <div>
      <h3>SimpleApiTask</h3>
      <div>{content}</div>
      <div>
        <button onClick={fetchTodoHandler}>Get Todos</button>
      </div>
    </div>
  );
}
