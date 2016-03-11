import Immutable from 'immutable';

const defaultState = new Immutable.List();

export default function subnoteReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_SUBNOTES':
      return new Immutable.fromJS(action.res.data.subnotes);
    case 'CREATE_SUBNOTE':
      return state.concat(action.text);
    case 'EDIT_SUBNOTE':
      return state.set(action.id, action.text);
    case 'DELETE_SUBNOTE':
      return state.delete(action.id);
    default:
      return state;
  }
}
