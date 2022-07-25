import React from 'react';
import Header from './mainpage/Header';
import Login from './mainpage/Login';
import Card from './card/Card';
import Add from './card,fav/Add';
import Fav from './card,fav/Fav';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='header' element={<Header/>}></Route>
        <Route path='card' element={<Card/>}></Route>
        <Route path='add' element={<Add/>}></Route>
        <Route path='fav' element={<Fav/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App