
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('songs', function(table) {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('artist');
      table.string('audio');
      table.string('tab');
      table.integer('priority');
      table.string('timestamps');

      table.timestamps(true, true);
    })
  ])
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('songs'),
  ]);
};
