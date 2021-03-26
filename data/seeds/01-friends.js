
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('friends').del()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        {id: 1, name: 'Ross'},
        {id: 2, name: 'Rachel'},
        {id: 3, name: 'Chandler'}
      ]);
    });
};
