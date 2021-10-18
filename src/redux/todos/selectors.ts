import { RootState } from '../store';

export const selectTodos = (state: RootState) => state.todos.todos;
export const selectStatus = (state: RootState) => state.todos.isLoading;