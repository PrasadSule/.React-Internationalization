import React from 'react';

const MainHeader = () => {
  const menuItems = ['Home', 'Products', 'About', 'Contact'];

  return (
    <header className="App-header">
      <nav style={{ display: 'inline' }}>
        <ul style={{ display: 'inline', listStyle: 'none', margin: 0, padding: 0 }}>
          {menuItems.map((item, index) => (
            <li key={index} style={{ display: 'inline', marginLeft: '1rem' }}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
