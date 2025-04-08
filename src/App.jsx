import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Wine } from './components/Wine'
import { WineDetail } from './components/WineDetails'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/vino' element={<Wine/>}/>
        <Route path='/vino/:id' element={<WineDetail/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
