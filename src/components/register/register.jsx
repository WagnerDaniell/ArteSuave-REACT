import React from 'react';
import './register.css';
import back from '../../assets/icons/return.png';
import nav from '../../styles/header.module.css';
import logo from '../../assets/imgs/logoTransparente.png';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import { firestore } from '../../services/firebase';
import { doc, setDoc } from 'firebase/firestore'; 
import '../../styles/global.css';

function Register() {
    const location = useLocation();
    const navigate = useNavigate(); 
    
    const uid = location.state?.uid; 

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        const data = {
            nomeCompleto: event.target.nomeCompleto.value,
            cpf: event.target.cpf.value,
            idade: event.target.idade.value,
            telefone: event.target.telefone.value,
            endereco: event.target.endereco.value,
            diaVencimento: event.target.diaVencimento.value,
            historicoLesao: event.target.historicoLesao.value,
            numeroEmergencia: event.target.numeroEmergencia.value,
            uid: uid // Use o UID recebido da tela de login
        };

        try {
            
            const docRef = doc(firestore, "info-users", uid); 
            await setDoc(docRef, data); 
            console.log("Documento escrito com ID: ", uid);
            
            navigate('/home'); 
        } catch (e) {
            console.error("Erro ao enviar os dados: ", e);
        }
    };

    if (!uid) {
        return <p>Você não tem permissão para acessar esta página. Por favor, faça o login.</p>;
    }

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

            <div className='container-center'>
                <div className="container" id="container">
                    <div className="form-container sign-in">
                        <form onSubmit={handleSubmit}>
                            <h1>Cadastre-se</h1>
                            <p>Insira seus dados para realizar o cadastro.</p>
                            <input name="nomeCompleto" type="text" placeholder="Nome Completo" required />
                            <input name="cpf" type="text" placeholder="CPF" required />
                            <input name="idade" type="text" placeholder="Idade" required />
                            <input name="telefone" type="text" placeholder="Telefone" required />
                            <input name="endereco" type="text" placeholder="Endereço" required />
                            <input name="diaVencimento" type="text" placeholder="Dia de vencimento" required />
                            <input name="historicoLesao" type="text" placeholder="Histórico de lesão" required />
                            <input name="numeroEmergencia" type="text" placeholder="Número de emergência" required />
                            <button type="submit">Finalizar</button>
                        </form>
                    </div>
                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-right">
                                <h1>Finalize seu cadastro!</h1>
                                <p>Cadastre-se para aproveitar todos os recursos da plataforma!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
