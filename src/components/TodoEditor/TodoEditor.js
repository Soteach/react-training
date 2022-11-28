import React, { Component } from 'react';
import './TodoEditor.css';
// В едіторі зберігаємо тимчасовий стан, поки друкується тудушка.
class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = event => {
    this.setState({ message: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Додати
        </button>
      </form>
    );
  }
}
export default TodoEditor;
