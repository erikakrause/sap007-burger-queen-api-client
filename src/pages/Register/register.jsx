//import { useState } from 'react';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import { } from './style.css'
//import { Link } from 'react-router-dom';

function Login() {
/*const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const location = useLocation();
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  function handlerClick(e) {
    e.preventDefault();
    userLogin(email, password)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        setErrorMsg(codeError(response));
      })*/

return (
    
    <div>
      <Logo/>
    <form>
      <Select />
      <Input 
      type='name'
      placeholder='Nome Completo'/>
      <Input
      type ='email'
      //value = {email}
      placeholder='exemplo@exemplo.com'
     // onChange={(e) => setEmail(e.target.value)}
      />
      <Input
      type ='password'
     //value = {password}
      placeholder='Digite sua senha'
      //onChange={(e) => setPassword(e.target.value)}
      />

      <Button type='button' children='Cadastrar'/>
    </form>
    </div>
    
  );
}
export default Login;