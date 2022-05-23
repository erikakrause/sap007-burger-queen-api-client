import logo from '../../img/logo.png';
import style from './style.module.css';
function Logo() {
  return (
    <div className={style.Logo}>
      <img src={logo} alt="logo" className={style.LogoImg}></img>
    </div>
  )
}
export default Logo
