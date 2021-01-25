import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { DietListPage, AllTheMenusPage, ManageMenuPage } from './pages';
import { Header, Menu } from './components';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <div className="menu">
          <Menu />
        </div>
        <div className="canvas">
          <Switch>
            <Route path="/diet-list">
              <DietListPage />
            </Route>
            <Route path="/all-the-menus">
              <AllTheMenusPage />
            </Route>
            <Route path="/manage-menu/:user/:room">
              <ManageMenuPage />
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
