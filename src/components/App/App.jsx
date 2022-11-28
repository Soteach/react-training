import { Container } from './App.styled';
import Counter from '../Counter';
import Dropdown from '../Dropdown';
import ColorPicker from '../ColorPicker';
import TodoList from '../TodoList';
import React, { Component } from 'react';
import intialTodos from '../../todos.json';
import Form from '../Form';

const colorPickerOptions = [
  { label: 'red', color: '#f44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196f3' },
  { label: 'grey', color: '#607d8b' },
  { label: 'pink', color: '#e91e63' },
  { label: 'indigo', color: '#3f51b5' },
];

class App extends Component {
  state = {
    todos: intialTodos,
  };
  // беремо всі prevState item. За допомогою методу filter для кожної todo виконуємо її перевірку на ІД
  // тобто повертаємо за допомогою фільтрав масив ті itemщо не дорівнюють ІД
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  // handleNameChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ name: event.currentTarget.value });
  // };

  // handleSoNameChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ soname: event.currentTarget.value });
  // };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
    // console.log(completedTodos);
    return (
      <>
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <h1>Стан компонента</h1>
        {/* в onDeleteTodo кидаємо посилання на метод deleteTodo і отримуємо від нього ІД todoId*/}
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        <div>
          <p> Загальна кількість todo: {totalTodoCount} </p>
          <p>к-ть виконаних todo: {completedTodoCount}</p>
        </div>

        <Container>
          <Form onSubmit={this.formSubmitHandler} />
        </Container>
      </>
    );
  }
}

export default App;
