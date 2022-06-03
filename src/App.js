import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Menu from './components/Menu';
import Beer from './components/Beer';
import Spirit from './components/Spirit';
import NonAlcholic from './components/NonAlcholic';
import Kitchen from './components/Kitchen';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from "./firebase"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='beer' element={ <Beer/> }/>
        <Route path='spirit' element={ <Spirit/> }/>
        <Route path='noalcohol' element={ <NonAlcholic/> }/>
        <Route path='kitchen' element={ <Kitchen/> }/>
      </Routes>
    </div>
  );
}

export default App;
