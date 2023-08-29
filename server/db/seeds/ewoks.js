export const seed = (knex) =>
  knex('ewoks')
    .del()
    .then(() =>
      knex('ewoks').insert([
        { id: 1, name: 'Chief Chirpa', roles_id: 99901 },
        { id: 2, name: 'Logray', roles_id: 99902 },
        { id: 3, name: 'Flitchee', roles_id: 99903 },
        { id: 4, name: 'Wunka', roles_id: 99904 },
        { id: 5, name: 'Princess Kneesaa', roles_id: 99905 },
        { id: 6, name: 'Teebo', roles_id: 99906 },
        { id: 7, name: 'Deej Warrick', roles_id: 99907 },
        { id: 8, name: 'Wicket W. Warrick', roles_id: 99908 },
        { id: 9, name: 'Paploo', roles_id: 99909 },
      ])
    )
