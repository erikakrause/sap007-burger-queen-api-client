import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../src/pages/Login/login';
import Register from '../src/pages/Register/register';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
