import './styles/styles.css';
import './components/NavBar';
import '@fontsource/roboto';
import { Container }  from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';

function App() {

  
  return (
      <Container disableGutters={true} maxWidth='xl'>
        <NavBar/>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route exact path="/category/:id">
          <Category/>
          </Route>
          <Route exact path="/item/:id/:category" >
          <Product/>
          </Route>
        </Switch>
     </Container>
  );
}

export default App;
