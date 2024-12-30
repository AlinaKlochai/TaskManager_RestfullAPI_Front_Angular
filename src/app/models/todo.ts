export interface Todo {
  id: number;
  description: string;
  dueDate: string;
  state: 'OPEN' | 'DONE';
}

export type State = 'OPEN' | 'DONE';

  