import request from 'axios';

function requestHelper(method, endpoint){
  var port = process.env.PORT || 3000;
  return request[method](`http://0.0.0.0:${port}/${endpoint}`);
}

export function getSubnotes() {
  return {
    type: 'GET_SUBNOTES',
    promise: requestHelper('get', 'subnotes')
  }
}
