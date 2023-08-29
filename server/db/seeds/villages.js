export const seed = (knex) =>
  knex('villages')
    .del()
    .then(() =>
      knex('villages').insert([
        { id: 901, name: 'Bright Tree Village' },
        { id: 902, name: 'Hanging Moss Village' },
        { id: 903, name: 'Northern Lakes Village' },
        { id: 904, name: 'Southern Lakes Village' },
        { id: 905, name: 'Red Bush Grove' },
        { id: 906, name: 'Panshee Village' },
      ])
    )
