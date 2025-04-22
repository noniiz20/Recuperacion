import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Principal from './components/Pagina/Principal'
import Login from './components/Login/Login'
import RegistroU from './components/RegistroU/RegistroU'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Principal></Principal>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/Registrarse' element={<RegistroU></RegistroU>}></Route>
    </Routes>
  )
}

export default App
