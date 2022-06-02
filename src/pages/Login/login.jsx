import { useState } from 'react';
import Logo from '../../components/Logo/logo';
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';
import { userLogin } from '../../services/api';
import { setToken } from '../../services/token';
import './style.css';
import { useNavigate, useLocation, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const location = useLocation();
  if (location.state) {
    //message = location.state.message
  }

  function handleSubmit(e) {
    e.preventDefault();
    userLogin(email, password)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        // setErrorMsg(codeError(response));
      })
      .then((data) => {
        setToken(data.token);
        if (data.role === 'atendment') {
          navigate('/Register');
        }
      })
      .catch((error) => console.error(error));
    console.log('submit', email, password);
  }

  return (
    <div>
      <Logo />
      <h2>Bem-vindo</h2>
      <h3>Faça login para anotar os pedidos</h3>
      <form>
        <Input
          type="email"
          value={email}
          placeholder="exemplo@exemplo.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="button" children="Entrar" onClick={handleSubmit} />
      </form>
      <p>Não tem uma conta? <Link to="/register" className="registerUser">Cadastre-se</Link></p>
    </div>
  );
}

export default Login;
