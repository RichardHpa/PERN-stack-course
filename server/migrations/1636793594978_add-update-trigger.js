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
  IF row(NEW.*) IS DISTINCT FROM row(OLD.*) THEN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
  ELSE
    RETURN OLD;
  END IF;
END;
  `
  );
};

exports.down = pgm => {
  pgm.dropTrigger('todo', 'update_modified_column', { cascade: true, ifExists: true });
  pgm.dropFunction('update_modified_column');
};
