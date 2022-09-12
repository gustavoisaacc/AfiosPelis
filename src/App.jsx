import {Routes, Route} from 'react-router-dom'
import React from 'react'

import Header from './components/Header'
import Detalle from './components/Detalle'
import Home from './pages/Home'
import Search from './components/Search'

import './App.css'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detalle' element={<Detalle/>}/>
          <Route path='/search' element={<Search/>}/>
      </Routes>
    </div>
  )
}

export default App
