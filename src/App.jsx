import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Principal from './components/Pagina/Principal'
import Login from './components/Login/Login'
import RegistroU from './components/RegistroU/RegistroU'
import Ayuda from './components/Ayuda/Ayuda'
import QuienesSomos from './components/QuienesSomos/QuienesSomos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Principal></Principal>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/Registrarse' element={<RegistroU></RegistroU>}></Route>
      <Route path='/Ayuda' element={<Ayuda></Ayuda>}></Route>
      <Route path='/QuienesSomos' element={<QuienesSomos></QuienesSomos>}></Route>
    </Routes>
  )
}

export default App
