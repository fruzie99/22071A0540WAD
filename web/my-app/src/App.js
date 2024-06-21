import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
// import CartPage from './pages/CartPage';
// import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          {/* <Switch>
            <Route exact path="/" component={Home} /> */}
            {/* <Route exact path="/catalog" component={CatalogPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/login" component={LoginPage} /> */}
            {/* <Route exact path="/registration" component={RegistrationPage} />
          </Switch> */}
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;