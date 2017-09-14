import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  add = () => {
    const { text } = this.state;
    const { addTodo, index, sortTodos } = this.props;
    addTodo(index, { text });
    sortTodos(index);
    this.setState({ text: '' });
  };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    const { text } = this.state;
    const { todo, toggleDone, index } = this.props;
    return (
      <div>
        {
          todo.map((item, i) =>
            <div key={i} className="margin">
              <label htmlFor="checkbox">{item.text}</label>
              <input type="checkbox" checked={item.isDone} onClick={() => toggleDone(index, i)} className="checkbox" />
            </div>,
         )
        }
        <form onSubmit={e => this.handleSubmit(e)} className="abs">
          <input type="text" onChange={e => this.handleChange(e)} value={text} />
          <button onClick={this.add}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
