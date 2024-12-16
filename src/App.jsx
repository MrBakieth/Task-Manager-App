import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserLogin from './pages/UserLogin'
import MainPage from './pages/MainPage'
import ErrorPage from './pages/ErrorPage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={ < UserLogin /> } />
      <Route path='/mainpage' element={ < MainPage /> } />
      <Route path='*' element={ <ErrorPage /> } />
    </Routes>
    </>
  )
}

export default App
