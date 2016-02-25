import knex from 'knex'
import bookshelf from 'bookshelf'

const Bookshelf = bookshelf(knex({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    user     : 'ks',
    database : 'isomorphic'
  }
}));

const User = Bookshelf.Model.extend({
  tableName: 'users'
});
const Users = Bookshelf.Collection.extend({
  model: User
});

module.exports = { User, Users }
