import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="Todolist">
    {todos.map(({ id, text }) => (
      <li className="Todolist__item" key={id}>
        <p className="Todolist__text">{text}</p>
        {/* Передаємо в кнопку метод onDeleteTodo для видалення елементу */}
        <button
          onClick={() => {
            onDeleteTodo(id);
          }}
        >
          Видалити
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
