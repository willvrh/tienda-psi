import './styles/styles.css';
import './components/NavBar';
import '@fontsource/roboto';
import Container from '@material-ui/core/Container';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';


function App() {

  function onAdd(qty){
    alert("onAdd "+qty);
  };

  return (
      <Container disableGutters={true} maxWidth='xl'>
        <NavBar/>
        <ItemListContainer greetings="Bienvenido a la tienda!">
          <ItemList/>
        </ItemListContainer>
      </Container>
  );
}

export default App;
