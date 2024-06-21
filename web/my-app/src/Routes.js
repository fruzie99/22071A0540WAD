import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/catalog" component={CatalogPage} />
      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/registration" component={RegistrationPage} />
    </Switch>
  );
};

export default Routes;