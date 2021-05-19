import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div>
      <Count count={count} />
      <Button increment={increment} />
      <p>{feedback}</p>
    </div>
  );
}

function Count({ count }) {
  return <p>You clicked {count} times</p>;
}
function Button({ increment }) {
  return (
    <button className="btn" onClick={() => increment()}>
      Add 1!
    </button>
  );
}

export default Counter;