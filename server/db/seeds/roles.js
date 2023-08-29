export const seed = (knex) =>
  knex('roles')
    .del()
    .then(() =>
      knex('roles').insert([
        { id: 99901, description: 'Village Chief' },
        { id: 99902, description: 'Village Shaman' },
        { id: 99903, description: 'Master of War' },
        { id: 99904, description: 'Warrior' },
        { id: 99905, description: 'Warrior Princess' },
        { id: 99906, description: 'Hunter' },
        { id: 99907, description: 'Wickets Father' },
        { id: 99906, description: 'Brave young Warrior' },
        { id: 99907, description: 'Scout' },
      ])
    )
