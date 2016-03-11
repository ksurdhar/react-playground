var Schema = {
  users: {
    id: { type: 'increments', nullable: false, primary: true },
    username: { type: 'string', maxlength: 30, nullable: false, unique: true }
  },
  subnotes: {
    id: { type: 'increments', nullable: false, primary: true },
    content: { type: 'text', nullable: true }
  }
};
module.exports = Schema;
