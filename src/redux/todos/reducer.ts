import { createSlice } from '@reduxjs/toolkit';
import { ITodosState, ITodo } from './types';
import { fetchTodos, addTodo, deleteTodo } from './operations';

const getInitialTodoState = () => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : [];
};

const initialState = {
  todos: getInitialTodoState() || [],
  isLoading: false,
  error: null,
} as ITodosState;

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, { payload }: any) => {
        state.todos = payload;
        state.isLoading = false;
      })
      .addCase(fetchTodos.rejected, (state, { payload }: any) => {
        if (payload) state.error = payload.message;
        state.isLoading = false;
      });
    // builder
    //   .addCase(addTodo.pending, state => {
    //     state.isLoading = true;
    //     state.error = null;
    //   })
    //   .addCase(addTodo.fulfilled, (state, { payload }: any) => {
    //     state.todos.push(...payload);
    //     state.isLoading = false;
    //   })
    //   .addCase(addTodo.rejected, (state, { payload }: any) => {
    //     if (payload) state.error = payload.message;
    //     state.isLoading = false;
    //   });
    // builder
    //   .addCase(deleteTodo.pending, state => {
    //     state.isLoading = true;
    //     state.error = null;
    //   })
    //   .addCase(deleteTodo.fulfilled, (state, { payload }: any) => {
    //     state.todos.filter((todo: ITodo) => todo.id !== payload);
    //     state.isLoading = false;
    //   })
    //   .addCase(deleteTodo.rejected, (state, { payload }: any) => {
    //     if (payload) state.error = payload.message;
    //     state.isLoading = false;
    //   });
  },
});

console.log(todosSlice);

export default todosSlice.reducer;

// const todoSlice = createSlice({
//   name: 'todos',
//   initialState: initialTodosState,
//     extraReducers: {
//       [getTodos.pending]
//   },
// });

// export default todoSlice.reducer;

// addTodoSuccess: (state, { payload }) => {
//       //   state = [...state, payload];
//       state.isLoading = false;
//       state.error = null;
//     },
//     addTodoRequest: state => {
//       state.isLoading = true;
//     },
//     addTodoError: (state, { payload }) => {
//       state.error = payload;
//       state.isLoading = false;
//     },
//     deleteTodoSuccess: (state, { payload }) => {
//       //   state = state.filter(todo => todo.id !== payload);
//       state.isLoading = false;
//       state.error = null;
//     },
//     deleteTodoRequest: state => {
//       state.isLoading = true;
//     },
//     deleteTodoError: (state, { payload }) => {
//       state.error = payload;
//       state.isLoading = false;
//     },
//     getTodoSuccess: (state, { payload }) => {
//       state = payload;
//       state.isLoading = false;
//       state.error = null;
//     },
//     getTodoRequest: state => {
//       state.isLoading = true;
//     },
//     getTodoError: (state, { payload }) => {
//       state.error = payload;
//       state.isLoading = false;
//     },
//     filterTodo: (_, { payload }) => {},
