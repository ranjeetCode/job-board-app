import knex from 'knex';  //knex is a query builder

export const connection = knex({
  client: 'better-sqlite3',
  connection: {
    filename: './data/db.sqlite3',
  },
  useNullAsDefault: true,
});
