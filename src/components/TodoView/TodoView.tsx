import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from '../TodoList/TodoList';
import TodoEditor from '../TodoEditor/TodoEditor';
import TodoFilter from '../TodoFilter/TodoFilter';
import { ITodo } from '../../redux/todos/types';
import { selectTodos } from '../../redux/todos/selectors';
import { fetchTodos } from '../../redux/todos/operations';

// const getInitialTodoState = () => {
//   const savedTodos = localStorage.getItem('todos');
//   return savedTodos ? JSON.parse(savedTodos) : [];
// };

const TodoView = () => {
  const dispatch = useDispatch();
  //   const savedTodos = getInitialTodoState();
  const todos = useSelector(selectTodos);

  const getTodos = useCallback(
    () => !todos.length && dispatch(fetchTodos()),
    [],
  );

  useEffect(() => {
    return localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  console.log(todos);
  return (
    <div>
      <button onClick={getTodos}>Get Todos</button>
      <ul>
        {todos?.map((todo: ITodo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
      <TodoList />
    </div>
  );
};

export default TodoView;
