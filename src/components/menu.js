import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li class="listtext">
          <Link to="/diet-list">Diet List</Link>
        </li>
        <li class="listtext">
          <Link to="/all-the-menus">All the Menus</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
