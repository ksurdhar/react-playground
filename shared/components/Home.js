import React, { PropTypes } from 'react';
import TodosView from './TodosView';
import TodosForm from './TodosForm';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/TodoActions';
import * as UserActions from '../actions/UserActions';
import { connect } from 'react-redux';

@connect(state => ({ users: state.users, todos: state.todos }))
export default class Home extends React.Component {
  static needs = [
    UserActions.getUsers
  ];

  render() {
    const { users, todos, dispatch } = this.props;

    return (
      <div id="todo-list">
        <TodosView todos={ todos } users={ users }
          { ...bindActionCreators(TodoActions, dispatch) } />

        <TodosForm
          { ...bindActionCreators(TodoActions, dispatch) }/>
      </div>
    );
  };
}

Home.proptypes = {
  users: PropTypes.any.isRequired,
  todos: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired
}

// export default connect(state => ({ todos: state.todos, users: state.users }))(Home)
