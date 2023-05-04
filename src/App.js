import { Routes, Route } from 'react-router-dom';
import  Home  from './components/Home';
import { Navbar } from './components/Navbar';
import About from './components/About';
import { Nopage } from './components/Nopage';
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='About' element={<About/>}/>
          <Route path='*' element={<Nopage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
