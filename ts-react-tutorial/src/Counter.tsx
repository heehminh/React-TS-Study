import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // useState를 사용할 때, 상태가 null 일수도 있고 아닐수도 있을 때 generics 사용
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
