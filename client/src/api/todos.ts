import axios from 'axios';
const baseUrl = `http://localhost:${
  process.env.REACT_APP_SERVER_PORT || 5000
}/api`;

export const getAllTodos = async () => {
  try {
    const res = await axios.get(`${baseUrl}/todos`);
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
    const res = await axios.post(`${baseUrl}/todos`, {
      description
    });
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
};

interface Todo {
  id: number;
  description?: string;
}

export const getTodo = async ({ id }: Todo) => {
  try {
    const res = await axios.get(`${baseUrl}/todos/${id}`);
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
};

export const updateTodo = async ({ id, description }: Todo) => {
  try {
    const res = await axios.put(`${baseUrl}/todos/${id}`, {
      description
    });
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
};

export const deleteTodo = async ({ id }: Todo) => {
  try {
    const res = await axios.delete(`${baseUrl}/todos/${id}`);
    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
};
