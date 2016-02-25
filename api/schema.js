var Schema = {
  users: {
    id: { type: 'increments', nullable: false, primary: true },
    username: { type: 'string', maxlength: 30, nullable: false, unique: true }
  }
};
module.exports = Schema;
