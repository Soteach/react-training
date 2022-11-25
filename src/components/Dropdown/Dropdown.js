import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };
  // Не враховуючи попередній стан (просто переписуємо)
  //   show = () => {
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  // Враховуючи попередній стан
  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <>
        <h2>Робота з випадаючим меню</h2>

        <div className="Dropdown">
          <button
            type="button"
            className="Dropdown__toggle"
            onClick={this.toggle}
          >
            {this.state.visible ? 'Приховати' : 'Показати'}
          </button>

          {/* <button
            type="button"
            className="Dropdown__toggle"
            onClick={this.hide}
          >
            Приховати{' '}
          </button> */}

          {/* Використовуємо логічне і */}
          {/* Якщо значення приводиться до true то рендеримо розмітку */}
          {this.state.visible && (
            <div className="Dropdown__menu">Випадаюче меню</div>
          )}
        </div>
      </>
    );
  }
}

export default Dropdown;
