export function up(knex) {
  return knex.schema.table('ewoks', function (table) {
    table.integer('roles_id')
  })
}

export function down(knex) {
  return knex.schema.table('ewoks', function (table) {
    table.dropColumn('roles_id')
  })
}
