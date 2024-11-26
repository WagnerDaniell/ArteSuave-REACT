import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebase'; 
import { signOut } from 'firebase/auth';
import '../../styles/global.css';
import './home.css';
import logo from '../../assets/imgs/logoTransparente.png';
import { Link } from 'react-router-dom'
import nav from '../../styles/header.module.css'
import back from '../../assets/icons/return.png';
import { useAuth } from '../../services/useAuth';

function Home() {
    const navigate = useNavigate();
    const { user } = useAuth();

    //Proteger page de user não logado
    useEffect(() => {
        if (user == null) { 
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/'); 
        } catch (error) {
            console.error("Erro ao deslogar: ", error);
        }
    };

    return (
        <div>

            <header>
                <nav>
                <div><img className={nav.logo} src={logo} alt="" /></div>
                <ul className={nav.navlist}>
                    <li><Link className="home">Home</Link></li>
                    <li><Link to="/pagamentos" className="pagamentos">Pagamentos</Link></li>
                    <li><Link to="/senha" className="gerenciar">Gerenciar</Link></li>
                    <li><Link to="/perfil" className="perfil">Usuário</Link></li>
                    <li>
                        <button  onClick={handleLogout} className={nav.logoutButton}>
                            <img src={back} width="20px" height="20px" alt="Back" />
                        </button>
                    </li>
                </ul>
                </nav>
            </header>

            <main>
                <div className="titulo">
                    <h1 className="h1">Olá, Bem-vindo(a) à sua home page.</h1>
                </div>
            </main>
        </div>

        
        
    );
}

export default Home;
