import React, { Component } from 'react';

const TodoEditor = () => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {};

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
};

export default TodoEditor;
