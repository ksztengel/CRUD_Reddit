// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/reddit',
    migrations: {
        directory: `./server/db/migrations`,
      },
      seeds: {
        directory: `./server/db/seeds`,
      },
    },
    production: {
      client: `pg`,
      connection: `${process.env.DATABASE_URL}`,
      migrations: {
        directory: `./server/db/migrations`,
      },
      seeds: {
        directory: `./server/db/seeds`,
      },
    },
  };
