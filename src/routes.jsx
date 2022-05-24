import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';

export const RoutesNav = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}