export const seed = (knex) =>
  knex('roles')
    .del()
    .then(() =>
      knex('roles').insert([
        { id: 77701, name: 'Village Chief' },
        { id: 77702, name: 'Shaman' },
        { id: 77703, name: 'Master of War' },
        { id: 77704, name: 'Warrior' },
        { id: 77705, name: 'Warrior Princess' },
        { id: 77706, name: 'Hunter' },
        { id: 77707, name: 'Wickets Father' },
        { id: 77708, name: 'Brave Young Warrior' },
        { id: 77709, name: 'Scout' },
      ])
    )
