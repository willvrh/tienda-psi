import './styles/styles.css';
import './components/NavBar';
import '@fontsource/roboto';
import Container from '@material-ui/core/Container';
import NavBar from './components/NavBar';

function App() {
  return (
      <Container disableGutters={true} maxWidth='xl'>
        <NavBar/>
      </Container>
  );
}

export default App;
