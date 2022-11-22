import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  //   constructor() {
  //     super();
  //     // супер викликає конструктор батька React.Component
  //     //   до того як ми використовуємо this в тілі дитини constructor
  //     this.state = {
  //       value: 0,
  //     };
  //   }

  state = { value: 0 };
  handlerIncrement = event => {
    console.log('Клікнули в збільшити');
    // console.log(event.target);
  };

  handleDecrement = () => {
    console.log('Клікнули в зменшити');
    // console.log(this);
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <div className="Counter__controls">
          <button type="button" onClick={this.handlerIncrement}>
            Збільшити на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Зменшити на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
