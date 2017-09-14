import React, { Component } from 'react';

class Filter extends Component {
  handleChange = (e) => {
    this.props.updateSearch(e.target.value);
  };
  render() {
    return <input type="text" placeholder="Search" onChange={e => this.handleChange(e)} />;
  }
}

export default Filter;
