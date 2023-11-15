// components/MenuWrapper.js
'use client'
import React, { useState, useEffect } from 'react';
import MenuIcon from '../MenuIcon/MenuIcon';
import Menu from '../Menu/Menu';

function MenuWrapper() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    // When the menu is shown, disable scrolling on the body
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      // When the menu is hidden, enable scrolling
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to set overflow back to default when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMenu]); // Only re-run the effect if showMenu changes

  return (
    <>
      <MenuIcon onClick={toggleMenu} />
      {showMenu && <Menu />}
    </>
  );
}

export default MenuWrapper;
