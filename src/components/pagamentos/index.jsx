import React, { useEffect } from 'react';
import logo from '../../assets/imgs/logoTransparente.png';
import back from '../../assets/icons/return.png';
import { Link } from 'react-router-dom'
import qrcode from '../../assets/imgs/qrcode.png'
import nav from '../../styles/header.module.css'
import '../../styles/global.css'
import './pagamentos.css'
import { useAuth } from '../../services/useAuth';
import { useNavigate } from 'react-router-dom';


function Pagamentos(){

    const navigate = useNavigate();
    const { user } = useAuth();

    //Proteger page de user não logado
    useEffect(() => {
        if (user == null) { 
            navigate('/login');
        }
    }, [navigate]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText("81973079059")
            .then(() => {
                alert("Chave Pix copiada: 81973079059");
            })
            .catch(err => {
                console.error("Erro ao copiar: ", err);
            });
    };

    return(
        <div>
             <header>
                <nav>
                <div><img className={nav.logo} src={logo} alt="" /></div>
                <ul className={nav.navlist}>
                    <li><Link className={nav.navlist} to="/home"><img src={back} width="20px" height="20px" alt="Back" /></Link></li>
                </ul>
                </nav>
            </header>

            <main>
                <div className="titulo" >
                <h1 className="h1" >Pagamentos via pix</h1>
                    <div className="qrcode">
                        <img src={qrcode} alt="qrcode" height="250px" width="250pxs"/>
                        <p onClick={copyToClipboard} style={{ cursor: 'pointer' }}>Chave Pix: 81973079059</p>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Pagamentos