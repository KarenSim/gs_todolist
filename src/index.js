import React, { Component } from 'react';

import AddTodoList from './AddTodoList';

const sortByBool = (a, b) => {
  if (a.isDone === b.isDone) {
    return 0;
  } else if (a.isDone) {
    return 1;
  }
  return -1;
};
const sortTitles = (a, b) => {
  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  }
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  }
  return 0;
};
const sortTexts = (a, b) => {
  if (a.text.toLowerCase() > b.text.toLowerCase()) {
    return 1;
  }
  if (a.text.toLowerCase() < b.text.toLowerCase()) {
    return -1;
  }
  return 0;
};

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ title: 'aaa', todo: [{ text: 'bbb', isDone: false }], num: 0 }],
    };
  }
  sortLists = () => {
    const { list } = this.state;
    this.setState({ list: list.sort(sortTitles) });
  };
  sortTodos = (index) => {
    const { list } = this.state;
    list[index].todo.sort(sortTexts);
    list[index].todo.sort(sortByBool);
    this.setState({ list });
  };
  addTodoList = (title) => {
    const { list } = this.state;
    list.push({ title, todo: [], num: 0 });
    this.setState({ list });
  };
  addTodo = (index, value) => {
    const newValue = value;
    newValue.isDone = false;
    const { list } = this.state;
    list[index].todo.push(newValue);
    this.setState({ list });
  };
  toggleDone = (index, i) => {
    const { list } = this.state;
    list[index].todo[i].isDone = !list[index].todo[i].isDone;
    if (list[index].todo[i].isDone === true) {
      list[index].num += 1;
    } else {
      list[index].num -= 1;
    }
    this.sortTodos(index);
    this.setState({ list });
  };
  render() {
    const { list } = this.state;
    return (
      <div>
        <AddTodoList
          addTodoList={this.addTodoList}
          list={list} addTodo={this.addTodo}
          toggleDone={this.toggleDone}
          sortLists={this.sortLists}
          sortTodos={this.sortTodos}
        />
      </div>);
  }
}

export default ToDoList;
