import { useState } from 'react';
export function ToggleButton({ text, color }) {
  const [isClicked, setClick] = useState(false);

  function handleClick() {
    setClick(!isClicked ? true : false);
  }
  return isClicked ? (
    <button className={color} onClick={handleClick}>
      {text}
    </button>
  ) : (
    <button className="" onClick={handleClick}>
      {text}
    </button>
  );
}
