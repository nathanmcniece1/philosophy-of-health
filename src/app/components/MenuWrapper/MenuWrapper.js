// components/MenuWrapper.js
'use client'
import React, { useState } from 'react';
import MenuIcon from '../MenuIcon/MenuIcon';
import Menu from '../Menu/Menu';

function MenuWrapper() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <MenuIcon onClick={toggleMenu} />
      {showMenu && <Menu />}
    </>
  );
}

export default MenuWrapper;
