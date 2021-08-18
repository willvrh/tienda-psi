import './styles/styles.css';
import './components/NavBar';
import '@fontsource/roboto';
import Container from '@material-ui/core/Container';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetail';


function App() {

  function onAdd(qty){
    alert("onAdd "+qty);
  };

  return (
      <Container disableGutters={true} maxWidth='xl'>
        <NavBar/>
        <ItemDetailContainer/>
        {/* <ItemListContainer greetings="Bienvenido a la tienda!">
          <ItemList/>
        </ItemListContainer>*/}
  </Container>
  );
}

export default App;
