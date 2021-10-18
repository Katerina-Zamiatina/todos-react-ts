// import { Action, ActionCreator, Dispatch } from 'redux';
// import { ThunkAction } from 'redux-thunk';
import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ITodo, ITodoId } from './types';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos',
});

// interface Errors {
//   errorMessage: string;
//   field_errors: Record<string, string>;
// }

export const fetchTodos = createAsyncThunk(
  'todos',
  async () => {
    const { data } = await axiosInstance.get('');
    return data;
  },
  //     try {
  //
  //     } catch (error: any) {
  //       return rejectWithValue(error);
  //     }
  //   },
);

export const addTodo = createAsyncThunk('todos', async payload => {
  return await axiosInstance.post('', payload);
});

export const deleteTodo = createAsyncThunk('todos', async (payload: PayloadAction<ITodoId>) => {
  return await axiosInstance.delete(`/${payload}`);
});



// const asyncThunkAction: ActionCreator<ThunkAction<Promise<Action>, Todo, void>> = () => {
//     return async (dispatch: Dispatch<Todo>): Promise<Action> => {
//         try {
//             const todos = await axios.getTodos();
//             return dispatch({
//                 type: SET_TODOS,
//                 todos
//             })
//             catch(error){}
//         }
//     }
// }
