import React, { useState, useEffect } from 'react';
import { API } from '../services/';

const AllTheMenusPage = (props) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    API.GET('/menuroom')
      .then((promise) => promise.json())
      .then((result) => {
        const processedResult = result.map((r) => {
          const breakfast =
            r.menu[0] &&
            r.menu[0].breakfast &&
            Object.values(r.menu[0].breakfast);
          const lunch =
            r.menu[1] && r.menu[1].lunch && Object.values(r.menu[1].lunch);
          const evening =
            r.menu[2] && r.menu[2].evening && Object.values(r.menu[2].evening);
          return {
            ...r,
            menu: {
              breakfast,
              lunch,
              evening,
            },
          };
        });

        setMenu(processedResult);
      });
    return () => {};
  }, []);

  return (
    <div>
      {menu
        .filter((m) => m.roomid)
        .map((user) => (
          <div style={{ border: '1px solid black', marginBottom: '10px' }}>
            {user.roomid}
            {Object.keys(user.menu).map((k) => (
              <div>
                <h6>{k}</h6>
                {Object.values(user.menu[k]).map((item) => (
                  <span>{item}</span>
                ))}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default AllTheMenusPage;
