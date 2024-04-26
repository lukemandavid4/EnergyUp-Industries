import Home from './components/home/Home'
import './App.css'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
