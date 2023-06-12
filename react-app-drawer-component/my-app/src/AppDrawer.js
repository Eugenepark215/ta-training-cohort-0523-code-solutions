import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Menu } from './Menu';

const menuItems = ['About', 'Get Started', 'Sign In'];

export function AppDrawer() {
  const [handleClick, setClick] = useState(false);
  const display = handleClick ? 'display' : '';
  const offOn = !handleClick ? 'on' : 'off';

  function toggle() {
    handleClick ? setClick(false) : setClick(true);
  }
  return (
    <>
      {handleClick && (
        <Menu array={menuItems} className={`${offOn}`} onCustomClick={toggle} />
      )}
      <FaBars onClick={toggle} className="icon" />
      <div className={`modal-background ${display}`} onClick={toggle} />
    </>
  );
}
