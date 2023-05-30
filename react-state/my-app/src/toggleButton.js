import { useState } from 'react';
export function ToggleButton({ text, color }) {
  const [isClicked, setClick] = useState(false);

  function handleClick() {
    setClick(!isClicked ? true : false);
  }
  return <button onClick={handleClick}>{text}</button>;
}
