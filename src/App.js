import './styles/styles.css';
import './components/NavBar';
import '@fontsource/roboto';
import Container from '@material-ui/core/Container';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
function App() {
  return (
      <Container disableGutters={true} maxWidth='xl'>
        <NavBar/>
        <ItemListContainer greetings="Bienvenido a la tienda!">
        <ItemCount/>
        </ItemListContainer>

      </Container>
      
  );
}

export default App;
