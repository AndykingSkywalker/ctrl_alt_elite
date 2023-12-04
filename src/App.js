import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from './Components/Routing/Home';
import Buyers from './Components/Routing/Buyers';
import Properties from './Components/Routing/Properties';
import Sellers from './Components/Routing/Sellers';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
   <Router>
    <nav className="col" style={{maxWidth:"20%"}} className="nav flex-column">
    <Link className="nav-link" to='/'>Home</Link>
    <Link className="nav-link" to='/buyers'>Buyers</Link>
    <Link className="nav-link" to='/sellers'>Sellers</Link>
    <Link className="nav-link" to='/properties'>Properties</Link>
    </nav>
{/* Buyers, sellers, properties, home */}
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/buyers' element={<Buyers/>}/>
  <Route path='/properties' element={<Properties/>}/>
  <Route path='/sellers' element={<Sellers/>}/>
</Routes>
   </Router>
  );
}

export default App;
