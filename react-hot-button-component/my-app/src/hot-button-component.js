import { useState } from 'react';

export function HotButton() {
  const [isClicked, incrementClick] = useState(0);

  function handleIncrementClick() {
    incrementClick(isClicked + 1);
  }
  let color;
  if (isClicked >= 18) {
    color = '';
  } else if (isClicked >= 15) {
    color = 'yellow';
  } else if (isClicked >= 12) {
    color = 'orange';
  } else if (isClicked >= 9) {
    color = 'red';
  } else if (isClicked >= 6) {
    color = 'blue-violet';
  } else color = 'purple';
  return (
    <button className={color} onClick={handleIncrementClick}>
      Hot Button
    </button>
  );
}
