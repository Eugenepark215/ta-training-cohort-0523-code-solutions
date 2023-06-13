import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Menu } from './Menu';

export function AppDrawer({ items }) {
  const [handleClick, setClick] = useState(false);
  const [handleHeader, setHeader] = useState('');
  const display = handleClick ? 'display' : 'no-pointer';
  const offOn = !handleClick ? 'off' : 'on';

  function toggle() {
    handleClick ? setClick(false) : setClick(true);
  }
  function select(e) {
    if (items[e.target.value] !== handleHeader) {
      setHeader(items[e.target.value]);
    }
    toggle();
  }
  return (
    <>
      <Menu array={items} className={`${offOn}`} onCustomClick={select} />
      <FaBars onClick={toggle} className="icon" />
      <div className={`modal-background ${display}`} onClick={toggle} />
      <h1 className="header">{handleHeader}</h1>
    </>
  );
}
