import { useState } from 'react';

export function HotButton() {
  const [isClicked, incrementClick] = useState(0);

  function handleIncrementClick() {
    incrementClick(isClicked + 1);
  }

  if (isClicked >= 18) {
    return (
      <button className="" onClick={handleIncrementClick}>
        Hot Button
      </button>
    );
  } else if (isClicked >= 15) {
    return (
      <button className="yellow" onClick={handleIncrementClick}>
        Hot Button
      </button>
    );
  } else if (isClicked >= 12) {
    return (
      <button className="orange" onClick={handleIncrementClick}>
        Hot Button
      </button>
    );
  } else if (isClicked >= 9) {
    return (
      <button className="red" onClick={handleIncrementClick}>
        Hot Button
      </button>
    );
  } else if (isClicked >= 6) {
    return (
      <button className="blue-violet" onClick={handleIncrementClick}>
        Hot Button
      </button>
    );
  }
  return (
    <button className="purple" onClick={handleIncrementClick}>
      Hot Button
    </button>
  );
}
