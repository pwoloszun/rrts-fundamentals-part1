export interface Todo {
  id: number;
  title: string;
  description?: string;
}

export type TodoParams = Omit<Todo, 'id'>;
