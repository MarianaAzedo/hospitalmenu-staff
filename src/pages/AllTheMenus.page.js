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
          <div class="all--menus">
            {user.roomid}
            {Object.keys(user.menu).map((k) => (
              <React.Fragment>
                {Object.values(user.menu[k] || []).length > 0 && (
                  <div>
                    <h3>{k}</h3>
                    {Object.values(user.menu[k])
                      .filter(Boolean)
                      .map((item) => (
                        <div class="item">{item}</div>
                      ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
    </div>
  );
};

export default AllTheMenusPage;
