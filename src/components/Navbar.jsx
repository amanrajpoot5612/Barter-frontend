import React from 'react'


import { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav style={{ background: '#333', color: '#fff', padding: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Barter</div>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', margin: 0 }}>
          <li><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
          <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
          <li style={{ position: 'relative' }}>
            <button onClick={handleDropdown} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
              More ▼
            </button>
            {dropdownOpen && (
              <ul style={{ position: 'absolute', top: '2rem', left: 0, background: '#444', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px', minWidth: '120px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                <li style={{ margin: '0.5rem 0' }}><a href="#services" style={{ color: '#fff', textDecoration: 'none' }}>Services</a></li>
                <li style={{ margin: '0.5rem 0' }}><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
                <li style={{ margin: '0.5rem 0' }}><a href="#faq" style={{ color: '#fff', textDecoration: 'none' }}>FAQ</a></li>
              </ul>
            )}
          </li>
          <li><a href="#login" style={{ color: '#fff', textDecoration: 'none' }}>Login</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar