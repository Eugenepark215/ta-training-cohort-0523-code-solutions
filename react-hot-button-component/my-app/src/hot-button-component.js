import { useState } from 'react';

export function HotButton({ color }) {
  const [isClicked, incrementClick] = useState(0);

  return (
    <button className={color} onClick={() => incrementClick(isClicked + 1)}>
      Hot Button
    </button>
  );
}
