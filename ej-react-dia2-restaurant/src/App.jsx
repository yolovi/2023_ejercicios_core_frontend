import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Bookings from './components/Bookings/Bookings'
import Club from './components/Club/Club'
import Home from './components/Home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path= "/" element={<Home />}/>
          <Route path= "/Bookings" element={<Bookings />} />
          <Route path= "/Club" element={<Club />} />
        </Routes>
      </BrowserRouter>
    </>

     
  )
}


export default App

