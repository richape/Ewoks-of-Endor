export const seed = (knex) =>
  knex('ewoks')
    .del()
    .then(() =>
      knex('ewoks').insert([
        { id: 88801, name: 'Chief Chirpa', roles_id: 77701 },
        { id: 88802, name: 'Logray', roles_id: 77702 },
        { id: 88803, name: 'Flitchee', roles_id: 77703 },
        { id: 88804, name: 'Wunka', roles_id: 77704 },
        { id: 88805, name: 'Princess Kneesaa', roles_id: 77705 },
        { id: 88806, name: 'Teebo', roles_id: 77706 },
        { id: 88807, name: 'Deej Warrick', roles_id: 77707 },
        { id: 88808, name: 'Wicket W. Warrick', roles_id: 77708 },
        { id: 88809, name: 'Paploo', roles_id: 77709 },
      ])
    )
