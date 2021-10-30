import { rest } from 'msw';
import todos from './fixtures/Todos';

export const handlers = [
  rest.get('http://localhost:5000/todos', (req, res, ctx) => {
    return res(ctx.json(todos));
  })
];
