import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/diet-list">Diet List</Link>
        </li>
        <li>
          <Link to="/all-the-menus">All the Menus</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
