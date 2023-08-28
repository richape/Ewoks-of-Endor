export const seed = (knex) =>
  knex('location')
    .del()
    .then(() =>
      knex('location').insert([
        { id: 99901, description: 'Bright Tree Village' },
        { id: 99902, description: 'handy' },
        { id: 99903, description: 'french' },
        { id: 99904, description: 'lazy' },
        { id: 99905, description: 'clever' },
        { id: 99906, description: 'sporty' },
        { id: 99907, description: 'bossy' },
      ])
    )
