import Immutable from 'immutable';

const defaultState = new Immutable.List();

export default function userReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_USERS':
      console.log('ACTION RES - USER REDUCER', action.res);
      return new Immutable.fromJS(action.res.data.users);
    case 'CREATE_USER':
      return state.concat(action.text);
    case 'EDIT_USER':
      return state.set(action.id, action.text);
    case 'DELETE_USER':
      return state.delete(action.id);
    default:
      return state;
  }
}
