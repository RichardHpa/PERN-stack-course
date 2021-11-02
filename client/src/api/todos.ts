import axios from 'axios';

export const getAllTodos = async () => {
  try {
    const res = await axios.get('http://localhost:5000/todos');
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
};

interface NewTodo {
  description: string;
}

export const createTodo = async ({ description }: NewTodo) => {
  try {
    const res = await axios.post(`http://localhost:5000/todos`, {
      description
    });
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
};

interface Todo {
  id: number;
}

export const getTodo = async ({ id }: Todo) => {
  try {
    const res = await axios.get(`http://localhost:5000/todos/${id}`);
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
};

export const updateTodo = async ({ id }: Todo) => {
  try {
    const res = await axios.put(`http://localhost:5000/todos/${id}`);
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
};

export const deleteTodo = async ({ id }: Todo) => {
  try {
    const res = await axios.delete(`http://localhost:5000/todos/${id}`);
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
};
