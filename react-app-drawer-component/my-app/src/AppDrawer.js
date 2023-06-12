import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Menu } from './Menu';

export function AppDrawer({ items }) {
  const [handleClick, setClick] = useState(false);
  const display = handleClick ? 'display' : 'no-pointer';
  const offOn = !handleClick ? 'off' : 'on';

  function toggle() {
    handleClick ? setClick(false) : setClick(true);
  }
  return (
    <>
      <Menu array={items} className={`${offOn}`} onCustomClick={toggle} />
      <FaBars onClick={toggle} className="icon" />
      <div className={`modal-background ${display}`} onClick={toggle} />
    </>
  );
}
