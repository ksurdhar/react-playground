import request from 'axios';

function testfunc(){
  console.log('attempting request!');
  //problem is the request isn't sending the right headers.
  return request.get('/users');
}

export function getUsers() {
  return {
    type: 'GET_USERS',
    promise: testfunc()
  }
}
