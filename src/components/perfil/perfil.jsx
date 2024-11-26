import React, { useEffect, useState } from 'react';
import { auth, db } from '../../services/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import nav from '../../styles/header.module.css';
import './perfil.css';
import logo from '../../assets/imgs/logoTransparente.png';
import back from '../../assets/icons/return.png';
import Loading from '../loading/load';

function Perfil() {
    const [userData, setUserData] = useState(null); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserInfo = async (userId) => {
            try {
                const userRef = doc(db, "info-users", userId); 
                const docSnap = await getDoc(userRef);
                if (docSnap.exists()) {
                    setUserData(docSnap.data()); // Armazena os dados do usuário
                } else {
                    console.log("Usuário não encontrado");
                }
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
            }
        };

        // Verifica o estado de autenticação
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchUserInfo(user.uid); // Obtém os dados do usuário autenticado
            } else {
                navigate('/login'); 
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    if (!userData) {
        return <Loading />; 
    }

    return (
        <div>
            <header>
                <nav>
                    <div><img className={nav.logo} src={logo} alt="Logo" /></div>
                    <ul className={nav.navlist}>
                        <li><Link className={nav.navlist} to="/atualizar">Atualizar Dados</Link></li>
                        <li><Link className={nav.navlist} to="/home"><img src={back} width="20px" height="20px" alt="Voltar" /></Link></li>
                    </ul>
                </nav>
            </header>

            <div className="container">
                <div id='posinfo'><h1 id="info">Suas Informações</h1></div>
                <div id="user-info">
                    <p><strong>Nome:</strong> {userData.nomeCompleto}</p>
                    <p><strong>CPF:</strong> {userData.cpf}</p>
                    <p><strong>Idade:</strong> {userData.idade}</p>
                    <p><strong>Telefone:</strong> {userData.telefone}</p>
                    <p><strong>Endereço:</strong> {userData.endereco}</p>
                    <p><strong>Histórico:</strong> {userData.historicoLesao}</p>
                    <p><strong>Emergência:</strong> {userData.numeroEmergencia}</p>
                    <p><strong>Vencimento:</strong> {userData.diaVencimento}</p>
                </div>
            </div>
        </div>
    );
}

export default Perfil;
