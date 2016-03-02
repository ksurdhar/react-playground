import request from 'axios';

function testfunc(){
  //how do we rename this to whereever this is hosted?
  return request.get('http://0.0.0.0:8000/users');
}

export function getUsers() {
  return {
    type: 'GET_USERS',
    promise: testfunc()
  }
}
