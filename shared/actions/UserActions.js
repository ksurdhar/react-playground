import request from 'axios';

export function getUsers() {
  return {
    type:    'GET_USERS',
    promise: request.get('/users')
  }
}
