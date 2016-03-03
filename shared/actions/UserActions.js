import request from 'axios';

function requestHelper(method, endpoint){
  var port = process.env.PORT || 3000;
  return request[method](`http://0.0.0.0:${port}/${endpoint}`);
}

export function getUsers() {
  return {
    type: 'GET_USERS',
    promise: requestHelper('get', 'users')
  }
}
