import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Firebase Auth
import nav from '../../styles/header.module.css';
import logo from '../../assets/imgs/logoTransparente.png';
import back from '../../assets/icons/return.png';
import './styles.css'

function Gerenciar() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [accessGranted, setAccessGranted] = useState(false); 
  const navigate = useNavigate();  

  // UID autorizado
  const authorizedUID = "tdctZi5bffb3y05lt6lf1GYWYcu1";

  useEffect(() => {
    const auth = getAuth();
    
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        if (user.uid === authorizedUID) {
          setAccessGranted(true); // Acesso autorizado
          fetchUsers(); 
        } else {
          setAccessGranted(false); // Acesso negado
          navigate('/login'); 
        }
      } else {
        setAccessGranted(false); // Acesso negado se não houver usuário logado
        navigate('/login'); 
      }
    });

    
    return () => unsubscribe();
  }, [navigate]);

  // Função para buscar usuários do Firestore
  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "info-users"));
      const usersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersData);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  // Função para filtrar os usuários com base no nome ou CPF
  const filteredUsers = users.filter((user) => {
    return (
      user.nomeCompleto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.cpf.includes(searchTerm)
    );
  });

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

      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar por nome ou CPF"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <span className="search-icon">&#128269;</span> 
      </div>

      <div className="users-list">
        {accessGranted ? (
          filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div key={user.id} className="user-card">
                <h3>{user.nomeCompleto}</h3>
                <p><strong>CPF:</strong> {user.cpf}</p>
                <p><strong>Idade:</strong> {user.idade}</p>
                <p><strong>Telefone:</strong> {user.telefone}</p>
                <p><strong>Endereço:</strong> {user.endereco}</p>
                <p><strong>Histórico de Lesão:</strong> {user.historicoLesao}</p>
                <p><strong>Dia de Vencimento:</strong> {user.diaVencimento}</p>
                <p><strong>Numero de Emergência:</strong> {user.numeroEmergencia}</p>
              </div>
            ))
          ) : (
            <p>Nenhum usuário encontrado</p>
          )
        ) : (
          <p>Acesso negado. Você não tem permissão para acessar esta página.</p>
        )}
      </div>
    </div>
  );
}

export default Gerenciar;
