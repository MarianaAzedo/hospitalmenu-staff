import React, { useState, useEffect } from 'react';
import { API } from '../services/';
import { Link } from 'react-router-dom';

const DietListPage = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    API.GET('/users')
      .then((promise) => promise.json())
      .then((result) => setUsers(result));
    return () => {};
  }, []);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <td> Room </td>
            <td> Name </td>
            <td> Date of Birth </td>
            <td> Diet </td>
            <td> Comments </td>
            <td> Have Menu </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.room}</td>
              <td>{user.name}</td>
              <td>{user.dateofbirth}</td>
              <td>{user.allergens.join(' | ')}</td>
              <td>{user.comment}</td>
              <td>
                {!user.haveMenu && (
                  <Link to={`/manage-menu/${user.name}/${user.room}`}>
                    Edit
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DietListPage;
