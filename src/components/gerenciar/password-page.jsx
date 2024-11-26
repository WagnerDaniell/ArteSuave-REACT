import { Link, useNavigate } from 'react-router-dom';
import nav from '../../styles/header.module.css';
import logo from '../../assets/imgs/logoTransparente.png';
import back from '../../assets/icons/return.png';
import './passwordpage.css';
import { useState } from 'react';

function PasswordPage() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const verificarsenha = () => {
    if (inputValue === "123456") {
      navigate('/gerenciar');
    } else {
      alert("Senha Incorreta");
    }
  };

  return (
    <div>
      <header>
        <nav>
          <div><img className={nav.logo} src={logo} alt="Logo" /></div>
          <ul className={nav.navlist}>
            <li><Link className={nav.navlist} to="/home"><img src={back} width="20px" height="20px" alt="Voltar" /></Link></li>
          </ul>
        </nav>
      </header>

      <div className="containerpassword">
        <h2>Digite a Senha para Acessar a Página Gerenciar</h2>
        <input
          className="inputpass"
          type="password"
          id="password"
          placeholder="Senha"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={verificarsenha} className="buttonpass" id="submit">Acessar</button>
        <p className="error" id="error-message"></p>
      </div>
    </div>
  );
}

export default PasswordPage;
