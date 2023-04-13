import { Routes, Route } from 'react-router-dom';
import  Home  from './components/Home';
import { Navbar } from './components/Navbar';
import { Nopage } from './components/Nopage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Nopage />} />
      </Routes>
    </>
  );
}

export default App;
