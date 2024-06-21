import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import CartPage from './pages/CartPage';
import Login from './pages/LoginPage';
import Register from './pages/RegistrationPage';

const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} /> */}
      <Route exact path="/registration" component={Register} />
    </Switch>
  );
};

export default Routes;