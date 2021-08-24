import './styles/styles.css';
import './components/NavBar';
import '@fontsource/roboto';
import Container from '@material-ui/core/Container';
import NavBar from './components/NavBar';

import { BrowserRouter, Route, Switch, useLocation} from 'react-router-dom';

import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Breadcrumb from './components/Breadcrumb';

function App() {

  
  return (
      <Container disableGutters={true} maxWidth='xl'>
        
        <NavBar/>
        <Breadcrumb/>
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
