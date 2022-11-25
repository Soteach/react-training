import React from 'react';
import './Counter.css';
import Controls from './Controls';
import Value from './Value';

class Counter extends React.Component {
  // Оголошення Counter defoult props
  static defaultProps = {
    initialValue: 0,
  };

  //   constructor() {
  //     super();
  //     // супер викликає конструктор батька React.Component
  //     //   до того як ми використовуємо this в тілі дитини constructor
  //     this.state = {
  //       value: 0,
  //     };
  //   }

  state = {
    value: this.props.initialValue,
  };
  // Обовязково називаємо саме state і він обовязково є обєктом від властивостей обєкта залежить наша розмітка
  // state це властивість екземпляра
  // Записуємо нове значення в обєкт:
  handlerIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
    // викликаємо метод setState і передаємо в нього обєкт
    // в якому ми хочемо оновити цей стан в нашому випадку це value
    // якщо використовуємо функцію setState з обєктом, то ми можемо переписати обєкт не не беручи до уваги
    //значення стану.
    // Якщо ми робимо щось від попереднього значення, то ми передаємо setState  як ф-ію,
    //в якій оголошуємо параметр (в нашому випадку prevState) в який реакт записує актуальний стан
    // і ця ф-ія повинна повернути наш update (return {  value: prevState.value - 1,};)
  };
  // console.log('Клікнули в збільшити');
  // console.log(event.target);

  handlerDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
    // console.log('Клікнули в зменшити');
    // console.log(this);
  };

  render() {
    return (
      <div className="Counter">
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handlerIncrement}
          onDecrement={this.handlerDecrement}
        />
      </div>
    );
  }
}

export default Counter;
