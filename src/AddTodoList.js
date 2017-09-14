import React, { Component } from 'react';

import AddTodo from './AddTodo';
import Filter from './Filter';

class AddTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ind: '',
      filter: '',
    };
  }
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  updateSearch = (filter) => {
    this.setState({ filter });
  };
  addList = () => {
    const { name } = this.state;
    const { addTodoList, sortLists } = this.props;
    addTodoList(name);
    sortLists();
    this.setState({ name: '' });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  takeIndex = (ind) => {
    this.setState({ ind });
  };
  filter = (list) => {
    if (!this.state.filter) {
      return list;
    }
    return list.filter(item =>
      item.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0);
  };
  render() {
    const { name, ind } = this.state;
    const { list, addTodo, toggleDone, sortTodos } = this.props;
    return (
      <div className="block">
        <div className="todo">
          <h2>Todo List</h2>
          <Filter updateSearch={this.updateSearch} />
          <ul>{
            this.filter(list).map((item, i) =>
              <li key={i} onClick={() => this.takeIndex(i)}>{item.title}</li>)
          }</ul>
          <form onSubmit={e => this.handleSubmit(e)} className="abs">
            <input type="text" onChange={e => this.handleChange(e)} value={name} />
            <button onClick={this.addList}>Add todo list</button>
          </form>
        </div>
        <div className="todo">{
          list.map((item, i) =>
            <div key={i}>
              { ind === i &&
                <div>
                  <h2>{`${item.title} Todo ${item.num} is done`}</h2>
                  <AddTodo
                    todo={item.todo}
                    addTodo={addTodo}
                    index={i}
                    toggleDone={toggleDone}
                    sortTodos={sortTodos}
                  />
                </div>
              }
            </div>)
          }
        </div>
      </div>
    );
  }
}

export default AddTodoList;
