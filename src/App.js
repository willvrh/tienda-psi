import './styles/styles.css';
import '@fontsource/roboto';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container }  from '@material-ui/core';

import { CartContext, DefaultCartTemplate } from './context/CartContext';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import ViewCart from './pages/ViewCart';

function App() {


  return (
      <CartContext.Provider value={DefaultCartTemplate}>
        <Container disableGutters={true} maxWidth='xl'>
          <NavBar/>
          <Switch>
            <Route exact path="/">
            <Home/>
            </Route>
            <Route exact path="/cart">
            <ViewCart/>
            </Route>
            <Route exact path="/category/:id">
            <Category/>
            </Route>
            <Route exact path="/item/:id/:category" >
            <Product/>
            </Route>
          </Switch>
      </Container>
     </CartContext.Provider>
  );
}

export default App;
