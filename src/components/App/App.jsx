import { Container } from './App.styled';
import Counter from '../Counter';
import Dropdown from '../Dropdown';
import ColorPicker from '../ColorPicker';
import TodoList from '../TodoList';
import React, { Component } from 'react';
import intialTodos from '../../todos.json';
import Form from '../Form';
import TodoEditor from '../TodoEditor/TodoEditor';
import shortid from 'shortid';
import Filter from '../Filter';

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
  // addTodo метод для додавання тудушки щоб отримати значення форми
  addTodo = text => {
    console.log(text);
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  // беремо всі prevState item. За допомогою методу filter для кожної todo виконуємо її перевірку на ІД
  // тобто повертаємо за допомогою фільтрав масив ті itemщо не дорівнюють ІД
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);

    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          console.log('Знайшли потрібну тудушку');
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
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
    const { todos, filter } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    // const normalizedFilter = this.state.filter.toLowerCase();

    // const visibleTodos = this.state.todos.filter(todo =>
    //   todo.text.toLowerCase().includes(normalizedFilter)
    // );

    return (
      <>
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <h1>Стан компонента</h1>
        {/* в onDeleteTodo кидаємо посилання на метод deleteTodo і отримуємо від нього ІД todoId*/}
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />

        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />

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
