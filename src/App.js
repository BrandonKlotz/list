import React, { Component } from 'react';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="Form">
        <h3>TODO</h3>
        <div className="Content">
          <TodoList items={this.state.items} />
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Add List Item"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div className="Items">
        {this.props.items.map(item => (
          <li className="Item" key={item.id}>{item.text}</li>
        ))}
      </div>
    );
  }
}

export default TodoApp;
