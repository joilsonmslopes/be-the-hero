
exports.up = function(knex) { // metodo UP é para criar
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  })
};

exports.down = function(knex) { // metodo down é para deletar caso algo tenha dado errado
  return knex.schema.dropTable('ongs');
};
