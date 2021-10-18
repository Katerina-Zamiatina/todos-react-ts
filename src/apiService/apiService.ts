import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos',
});
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/todos';

export const getAllTodos = async () => {
    try {
        const todos = await axiosInstance.get('');
    } catch (error) {
        
    }
//   return axiosInstance.get('');
};

export const addTodo = (payload: any) => {
  return axiosInstance.post('', payload);
};

export const deleteTodo = (id: any) => {
  return axiosInstance.delete(`/${id}`);
};

