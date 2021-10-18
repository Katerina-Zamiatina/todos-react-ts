import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../redux/store';
import { fetchTodos } from '../../redux/todos/operations';
import { selectStatus, selectTodos } from '../../redux/todos/selectors';

const TodoList = () => {
  const dispatch = useDispatch();
  const isLoading = useTypedSelector(selectStatus);
  // useEffect(() => {
  //   dispatch(getTodos());
  // });
 
  return (
    <div>
      TodoList
    </div>
  );
};

export default TodoList;
