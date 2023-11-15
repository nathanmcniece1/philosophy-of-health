// RootLayout.js
import React from 'react';
import { Inter } from 'next/font/google';
import './styles.css';
import Title from './components/Title/Title';
import MenuWrapper from './components/MenuWrapper/MenuWrapper';
import Download from './components/Download/Download';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header className="site-header">
          <MenuWrapper /> {/* Use MenuWrapper here */}
          <Title />
          <Download />
        </header>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
