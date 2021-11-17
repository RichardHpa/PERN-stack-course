import { rest } from 'msw';
import todos from './fixtures/Todos';
import deleteResponse from './fixtures/DeleteTodo';
import updateResponse from './fixtures/UpdateTodo';

const baseUrl = `http://localhost:${
  process.env.REACT_APP_SERVER_PORT || 5000
}/api`;

export const handlers = [
  rest.get(`${baseUrl}/todos`, (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
  rest.delete(`${baseUrl}/todos/:id`, (req, res, ctx) => {
    return res(ctx.json(deleteResponse));
  }),
  rest.put(`${baseUrl}/todos/:id`, (req, res, ctx) => {
    return res(ctx.json(updateResponse));
  })
];
