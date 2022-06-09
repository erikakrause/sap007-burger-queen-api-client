import { useState } from 'react';
import Logo from '../../components/Logo/logo';
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';
import { userLogin } from '../../services/api';
import { saveToken } from '../../services/token';
import { errorMsg } from '../../services/error';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    userLogin(email, password)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        errorMsg(response);
      })
      .then((data) => {
        saveToken(data.token);
        if (data.role === 'saloon') {
          navigate('/saloon');
        } else {
          alert('Usuário não identificado, realize seu cadastro!');
        }
      })
      .catch((error) => console.error(error));
    console.log('submit', email, password);
  }

  return (
    <div>
      <Logo />

      <form>
        <h1>Bem-vindo</h1>
        <h2>Faça login para anotar os pedidos</h2>
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
      <p>
        Não tem uma conta?{' '}
        <Link to="/register" className="registerUser">
          Cadastre-se
        </Link>
      </p>
    </div>
  );
}

export default Login;
