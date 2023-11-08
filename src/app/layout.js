import React from 'react';
import { Inter } from 'next/font/google'
import './styles.css';
import Title from './components/Title/Title';
import MenuIcon from './components/MenuIcon/MenuIcon';
import Download from './components/Download/Download';
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})



function RootLayout({ children }) {

  return (
    <html lang="en" className={inter.className}>
      <body>
        <header className="site-header">
          <MenuIcon />
          <Title />
          <Download />
        </header>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;


