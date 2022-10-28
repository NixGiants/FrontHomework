import './App.css';
import MainPage from './pages/mainPage/MainPage';

import {Button, Navbar} from 'react-bootstrap';
import './css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
        <MainPage/>
        <Button clasName = 'myStyles' variant="primary">Primary</Button>
        <Button className='btn btn-primary'>this is button</Button>
       
    </div>
  );
}

export default App;
