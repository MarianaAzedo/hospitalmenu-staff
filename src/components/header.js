import React, { useState, useEffect } from 'react';
import { UserService } from '../services/';

const Header = (props) => {
  const [username, setUsername] = useState('');
  useEffect(() => {
    const configureUserName = async () => {
      const user = await UserService.getUser();
      setUsername(user.name);
    };

    configureUserName();
    return () => {};
  }, []);

  return (
    <header>
      <div className="header__text">{username} </div>
      <div className="header__avatar"> Avatar goes ghere </div>
    </header>
  );
};

export default Header;
