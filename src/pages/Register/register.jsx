import { useState } from 'react';
import Logo from '../../components/Logo/logo';
import Select from '../../components/Select/select';
import Input from '../../components/Input/input';
import Button from '../../components/Button/button';
import Footer from '../../components/Footer/footer';
import { createUser } from '../../services/api';
import { saveToken } from '../../services/token';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './register.css';


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const location = useLocation();
  if (location.state) {
    //message = location.state.message
  }

  function handleSubmit(e) {
    e.preventDefault();
    createUser(name, email, password)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        // setErrorMsg(codeError(response));
      })
      .then((data) => {
        saveToken(data.token);
        if (data.role === 'atendment') {
          navigate('/Register');
        }
      })
      .catch((error) => console.error(error));
    console.log('submit', name, email, password);
  }

  return (
    <div>
      <Logo />
      <h1>Crie sua conta!</h1>
      <form>
        <Select
          className="select-style"
          //name={role}
          optionValues={[
            { id: 'selected', title: 'Cargo' },
            { id: 'saloon', title: 'Garçom' },
            { id: 'kitchen', title: 'Cozinheiro' },
          ]}
          //onChange={(e) => setRole(e.target.value)}
        />
        <Input
          type="name"
          value={name}
          placeholder="Nome Completo"
          onChange={(e) => setName(e.target.value)}
        />
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
        <Button type="button" children="Cadastrar" onClick={handleSubmit} />
      </form>
      <p>Já tem conta? <Link to="/" className="loginUser">Faça login </Link></p>
      <Footer />
    </div>
  );
}

export default Register;
