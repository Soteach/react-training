import React, { useState } from 'react';

function Counter() {
  // Объявляем новую переменную состояния "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Розбираюсь з HOOK</h2>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}

export default Counter;
