import Immutable from 'immutable';

const defaultState = new Immutable.List();

export default function todoReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_USERS':
      console.log('-----------------> ACTION DATA', action.res.data.data);
      return new Immutable.List(action.res.data.data);
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
