import './App.css'
import About from './components/About';
import Header from './components/Header';
import Main from './components/Main';
import Order from './components/Order';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/main' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
    </>
  );
}

export default App;