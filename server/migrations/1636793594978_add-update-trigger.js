/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTrigger(
    'todo',
    'update_modified_column',
    {
      when: 'before',
      operation: 'update',
      level: 'row',
      language: 'plpgsql',
    },
    `
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  return NEW;
END;
  `
  );
};

exports.down = pgm => {
  pgm.dropTrigger('todo', 'update_modified_column', { cascade: true, ifExists: true });
  pgm.dropFunction('update_modified_column');
};
