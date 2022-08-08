import React from 'react';
import PropTypes from 'prop-types';
import ToDOItem from './todo-item';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.updateCompleted = this.updateCompleted.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  updateCompleted(field, value, id) {
    const { todoList } = this.props;
    const todoItem = todoList.find((item) => item.index === id);
    if (field === 'completed') todoItem.completed = value;
    if (field === 'task') todoItem.task = value;
  }

  deleteItem(index) {
    const { todoList, update } = this.props;
    const newList = todoList.filter((item) => item.index !== index);
    update([...newList]);
  }

  render() {
    const { todoList } = this.props;
    const items = todoList.map((item) => (
      <ToDOItem
        key={`todo-${item.index}`}
        completed={item.completed}
        deleteTodo={this.deleteItem}
        task={item.task}
        index={item.index}
        updateState={this.updateCompleted}
      />
    ));
    return (
      <ul className="list-group mt-5">
        {items}
      </ul>
    );
  }
}

ToDoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number]))).isRequired,
  update: PropTypes.func.isRequired,
};

export default ToDoList;
