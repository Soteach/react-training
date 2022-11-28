import React from 'react';
import classNames from 'classnames';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="Todolist">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('Todolist__item', {
          'Todolist__item--completed': completed,
        })}
      >
        <input
          type="checkbox"
          className="Todolist__checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className="Todolist__text">{text}</p>
        {/* Передаємо в кнопку метод onDeleteTodo для видалення елементу */}
        <button
          type="button"
          className="Todolist__btn"
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
