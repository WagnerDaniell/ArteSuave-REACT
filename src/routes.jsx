import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/main'
import Login from './components/login/login'
import Register from './components/register/register'
import Home from './components/home/ihome'
import Pagamentos from './components/pagamentos/index'
import Perfil from './components/perfil/perfil'
import PasswordPage from './components/gerenciar/password-page'
import Gerenciar from './components/gerenciar/gerenciar'
import AtualizarDados from './components/att_dados/atualizar_perfil'


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} ></Route>
                <Route path="/login" element={<Login />} ></Route>
                <Route path="/cadastro" element={<Register />} ></Route>
                <Route path="/home" element={<Home />} ></Route>
                <Route path="/pagamentos" element={<Pagamentos />} ></Route>
                <Route path="/perfil" element={<Perfil />} ></Route>
                <Route path="/senha" element={<PasswordPage />} ></Route>
                <Route path="/gerenciar" element={<Gerenciar />} ></Route>
                <Route path="/atualizar" element={<AtualizarDados />} ></Route>

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
