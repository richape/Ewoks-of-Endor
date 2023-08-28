export const seed = (knex) =>
  knex('location')
    .del()
    .then(() =>
      knex('location').insert([
        { id: 99901, description: 'Bright Tree Village' },
      ])
    )
