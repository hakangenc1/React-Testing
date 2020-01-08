import React, { useState } from 'react';

export default function TodoForm() {
  const [todo, setTodo] = useState([]);
  const [item, setItem] = useState('');

  const handleChange = e => {
    setItem(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTodo([...todo, item]);
    setItem('');
  };

  return (
    <div>
      <input
        type="text"
        name="todo"
        className="todo-input"
        autoFocus
        onChange={handleChange}
        value={item}
        placeholder="Enter a todo item"
      />
      <button
        className="btn-click"
        data-testid="btn-click"
        onClick={handleSubmit}
      >
        Add item
      </button>

      <h1>Todo</h1>
      <div data-testid="todos">
        {todo.map((e, i) => (
          <div data-testid="todo" className="todo" key={i}>
            {e}
          </div>
        ))}
      </div>
    </div>
  );
}
