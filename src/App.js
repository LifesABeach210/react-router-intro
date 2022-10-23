import NavBar from './Componets/NavBar';
import './App.css';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
     <Outlet/>
      </header>
    </div>
  );
}

export default App;
