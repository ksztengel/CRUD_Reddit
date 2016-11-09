
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          email: "kristin@email.com",
          username: "Kristin",
          hashed_password: 1234}),
        knex('users').insert({
          email: 'ali@gmail.com',
          username: 'Ali',
          hashed_password: 45678}),
        knex('users').insert({
          email: 'david@gmail.com',
          username: 'David',
          hashed_password: 1234})
      ]);
    });
};
