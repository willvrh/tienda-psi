import './styles/styles.css';
import './components/NavBar';
import '@fontsource/roboto';
import Container from '@material-ui/core/Container';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';
import Item from './components/Item';


function App() {

  function onAdd(qty){
    alert("onAdd "+qty);
  };

  return (
      <Container disableGutters={true} maxWidth='xl'>
        <NavBar/>
        <ItemListContainer greetings="Bienvenido a la tienda!">
        {/*<ItemCount 
          stock='5'
          initial='1'
          onAdd={onAdd}
        />*/}
          <ItemList>
            
          </ItemList>


        </ItemListContainer>

      </Container>
      
  );
}

export default App;
