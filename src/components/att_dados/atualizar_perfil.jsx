import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from '../../services/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../../services/useAuth';
import nav from '../../styles/header.module.css';
import logo from '../../assets/imgs/logoTransparente.png';
import back from '../../assets/icons/return.png';
import './atualizar.css';
import Loading from '../loading/load';

function AtualizarDados() {
  const { user } = useAuth(); // Obtém o usuário logado
  const navigate = useNavigate();

  
  useEffect(() => {
    if (!user == null) { 
        navigate('/login');
    }
  }, [navigate]);


  const [formData, setFormData] = useState({
    nomeCompleto: '',
    cpf: '',
    idade: '',
    telefone: '',
    endereco: '',
    diaVencimento: '',
    historicoLesao: '',
    numeroEmergencia: '',
  });

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        const docRef = doc(db, 'info-users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFormData(docSnap.data());
        }
      };
      fetchUserData();
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      const docRef = doc(db, 'info-users', user.uid);
      await updateDoc(docRef, formData);
      alert('Dados atualizados com sucesso!');
    }
  };


  if (!user) {
    return <Loading />; 
  }

  

  return (
    <div>
      <header>
        <nav>
          <div><img className={nav.logo} src={logo} alt="" /></div>
          <ul className={nav.navlist}>
            <li><Link className={nav.linkk} to="/perfil"><img src={back} width="20px" height="20px" alt="Back" /></Link></li>
          </ul>
        </nav>
      </header>

      <div className="container-center">
        <div className="container" id="container">
          <div className="form-container sign-in">
            <form onSubmit={handleSubmit}>
              <h1>Atualize-se</h1>
              <p>Todos os campos devem estar preenchidos.</p>
              <input name="nomeCompleto" type="text" placeholder="Nome Completo" value={formData.nomeCompleto} onChange={handleChange} required />
              <input name="cpf" type="text" placeholder="CPF" value={formData.cpf} onChange={handleChange} required />
              <input name="idade" type="text" placeholder="Idade" value={formData.idade} onChange={handleChange} required />
              <input name="telefone" type="text" placeholder="Telefone" value={formData.telefone} onChange={handleChange} required />
              <input name="endereco" type="text" placeholder="Endereço" value={formData.endereco} onChange={handleChange} required />
              <input name="diaVencimento" type="text" placeholder="Dia de vencimento" value={formData.diaVencimento} onChange={handleChange} required />
              <input name="historicoLesao" type="text" placeholder="Histórico de lesão" value={formData.historicoLesao} onChange={handleChange} required />
              <input name="numeroEmergencia" type="text" placeholder="Número de emergência" value={formData.numeroEmergencia} onChange={handleChange} required />
              <button type="submit">Finalizar</button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-right">
                <h1>Atualize seu cadastro!</h1>
                <p>Caso tenha errado algo no cadastro você pode alterar agora!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AtualizarDados;
