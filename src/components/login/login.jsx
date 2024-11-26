// src/Login.jsx
import React, { useRef, useState } from 'react';
import './login.css';
import back from '../../assets/icons/return.png';
import nav from '../../styles/header.module.css';
import logo from '../../assets/imgs/logoTransparente.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import '../../styles/global.css';

function Login() {
  const containerRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    containerRef.current.classList.add('active');
  };

  const handleLoginClick = () => {
    containerRef.current.classList.remove('active');
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');

    if (code !== "123456" && code !== "134567") {
      setError('O código digitado está desativado ou é inválido.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid; 
      console.log("Cadastro realizado com sucesso!");

      
      navigate('/cadastro', { state: { uid } });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login realizado com sucesso!");
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <header>
        <nav>
          <div><img className={nav.logo} src={logo} alt="" /></div>
          <ul className={nav.navlist}>
            <li><Link className={nav.linkk} to="/"><img src={back} width="20px" height="20px" alt="Back" /></Link></li>
          </ul>
        </nav>
      </header>
      <div className="container-center">
        <div className="container" ref={containerRef}>
          <div className="formContainer signUp">
            <form onSubmit={handleSignUp}>
              <h1>Faça seu cadastro</h1>
              <span>Realize seu cadastro abaixo</span>
              <input
                type="email"
                placeholder="Digite seu email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Digite sua senha..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input 
                type="text" 
                placeholder="Digite o Código do Aluno"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <button type="submit">Próximo</button>
              {error && <p>{error}</p>}
            </form>
          </div>

          <div className="formContainer signIn">
            <form onSubmit={handleLogin}>
              <h1>Arte Suave</h1>
              <span>Realize seu login abaixo</span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <a href="#">Esqueceu sua senha?</a>
              <button type="submit">Entrar</button>
              {error && <p>{error}</p>}
            </form>
          </div>

          <div className="toggleContainer">
            <div className="toggle">
              <div className="togglePanel toggleLeft">
                <h1>Cadastre-se</h1>
                <p>Insira seus dados para iniciar o cadastro.</p>
                <button className="hidden" onClick={handleLoginClick}>Voltar</button>
              </div>
              <div className="togglePanel toggleRight">
                <h1>Bem-vindo!</h1>
                <p>Ainda não tem cadastro? <br />Clique abaixo e crie sua conta agora.</p>
                <button className="hidden" onClick={handleRegisterClick}>Fazer cadastro</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
