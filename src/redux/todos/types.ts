export interface ITodoId {
  id: string;
}

export interface ITodo {
  id: ITodoId;
  title: string;
  completed: boolean;
}

export interface ITodosState {
  todos: ITodo[];
  isLoading: boolean;
  error: string | null;
}

export interface IPagination {
  page: number;
  limit: number;
}
