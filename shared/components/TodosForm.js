
import React, { PropTypes } from 'react';

export default class TodosForm extends React.Component {
  static propTypes = {
    createTodo: PropTypes.func.isRequired
  };

  handleSubmit = () => {
    console.log('handlesubmit fired');
    let node = this.refs['todo-input'];

    this.props.createTodo(node.value);

    node.value = '';
  };

  render() {
    console.log(this.handleSubmit);
    return (
      <div>
        <input type="text" placeholder="type todo" ref="todo-input" />
        <input type="submit" value="OK!" onClick={this.handleSubmit} />
      </div>
    );
  };
}
