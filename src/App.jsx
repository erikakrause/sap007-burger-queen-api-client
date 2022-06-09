import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../src/pages/Login/login';
import Register from '../src/pages/Register/register';
import Saloon from '../src/pages/Saloon/saloon';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/saloon" element={<Saloon />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
