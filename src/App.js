import './styles/styles.css';
import './components/NavBar';
import '@fontsource/roboto';
import Container from '@material-ui/core/Container';
import NavBar from './components/NavBar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';

function App() {

  return (
      <Container disableGutters={true} maxWidth='xl'>
        <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/category/:id">
            <Category/>
          </Route>
          <Route exact path="/item/:id">
            <Product/>
          </Route>

        </Switch>
        
        
        </BrowserRouter>
     </Container>
  );
}

export default App;
