import request from 'axios';

function testfunc(){
  return request.get('http://0.0.0.0:3000/users');
}

export function getUsers() {
  return {
    type: 'GET_USERS',
    promise: testfunc()
  }
}
