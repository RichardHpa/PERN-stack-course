import { rest } from 'msw';
import todos from './fixtures/Todos';
import deleteResponse from './fixtures/DeleteTodo';

export const handlers = [
  rest.get('http://localhost:5000/todos', (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
  rest.delete('http://localhost:5000/todos/:id', (req, res, ctx) => {
    return res(ctx.json(deleteResponse));
  })
];
