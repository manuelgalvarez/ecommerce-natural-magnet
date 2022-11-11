import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Menu from './components/navbar/navbar';
import AppRouter from './components/router/router';

//<nombreComponente/> -> Para utilizar/usar los componentes
function App() {
  return (
    
    <div className="App">
      <Menu />
    
      <Container>
        <AppRouter />
      </Container>

    </div>
  );
}

export default App;
