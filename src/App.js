import './styles/styles.css';
import '@fontsource/roboto';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container }  from '@material-ui/core';
import CartContextProvider from './context/CartContext';
import AuthContextProvider from './context/AuthContext';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Orders from './pages/Orders';
import ViewCart from './pages/ViewCart';
import ViewOrder from './pages/ViewOrder';
import ViewWishlist from './pages/ViewWishlist';

import CarouselContainer from './components/Carousel';


function App() {


  return (
    <AuthContextProvider>
      <CartContextProvider>
        <Container disableGutters={true} maxWidth='xl'>
          <NavBar/>
          
          <Switch>
            <Route exact path="/">
              <CarouselContainer/>
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
            <Route exact path="/order/:id">
              <ViewOrder/>
            </Route>
            <Route exact path="/orders">
              <Orders/>
            </Route>
            <Route exact path="/wishlist">
              <ViewWishlist/>
            </Route>
          </Switch>
      </Container>
     </CartContextProvider>
     </AuthContextProvider>
  );
}

export default App;
