import './App.css';
import Header from './components/Header'
import Definition from './components/Definition'
import Dictionary from './pages/Dictionary'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Error404 from './components/Error404';
function App() {
  return (
    <>
      <Router>
        <Header>
            <Routes>
              <Route path='/about' element={<About />} />
              <Route path='/dictionary' element={ <Dictionary /> } />
              <Route path='/definition/:search' element={ <Definition /> } />
              <Route path='/not_found' element={<Error404 />} />
              <Route path='*' element={<Error404 />} />

            </Routes>
        </Header>
      </Router>
    </>
  )
}

export default App
