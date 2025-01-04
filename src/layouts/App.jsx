import { Outlet } from 'react-router-dom';
import '../index.css'
import Beranda from '../pages/Beranda';

function App() {
  return (
    <div>
    <Outlet/>
    </div>
  );
}

export default App;
