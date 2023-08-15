import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

function App() {
  return (
    <div className="App">

      <Navbar/>

      <Routes>

        <Route path='/' element= {<Home/>} />
        <Route path='/quiz' element={<Quiz/>} />

      </Routes>

      

    </div>
  );
}

export default App;
