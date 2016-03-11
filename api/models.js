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

const Subnote = Bookshelf.Model.extend({
  tableName: 'subnotes'
});
const Subnotes = Bookshelf.Collection.extend({
  model: Subnote
});

module.exports = { User, Users, Subnote, Subnotes }
