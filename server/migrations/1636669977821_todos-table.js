/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('todo', {
    todo_id: 'id',
    description: { type: 'varchar(1000)', notNull: true },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    updated_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    completed_at: {
      type: 'timestamp',
    },
  });
};

exports.down = pgm => {
  pgm.dropTable('todo');
};
