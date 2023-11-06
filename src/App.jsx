import './styles/App.css'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <>
  <NavBar />
  <div id="main">
  <Outlet />
  </div>

  <Footer />
    </>
  )
}

export default App
