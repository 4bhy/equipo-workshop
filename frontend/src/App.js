import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import './App.css';
import LandingScreen from './screens/LandingScreen';


function App() {
  return (

    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingScreen/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
