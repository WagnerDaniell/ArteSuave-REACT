import React from 'react';
import './load.css'; 
import logo from '../../assets/imgs/logoTransparente.png';

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="logo"><img src={logo} alt="Logo" height="40px" width="40px"/></div>
            <div className="spinner"></div>
            <p>Carregando...</p>
        </div>
    );
};

export default Loading;
