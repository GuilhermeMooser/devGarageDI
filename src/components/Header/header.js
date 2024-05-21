import { useContext } from 'react'
import {Link} from 'react-router-dom';

import imgLogo from '../../assets/imgs/logo.png'

import {AuthContext} from '../../contexts/auth'

export default function Header() {

    const { logout } = useContext(AuthContext);

    return(
        <header className="header">
        <nav className="nav">
            <a href="/home" className="logo"><img src={imgLogo} alt="logo"></img></a>
            <button className="hamburguer"></button>
            <ul className="nav-list">
                <li><Link to="/bmw">BMW</Link></li>
                <li><Link to="/porsche">Porsche</Link></li>
                <li><Link to="/comunidade">Comunidade</Link></li>
                <li><Link onClick={ () => logout() }>Sair</Link></li>
            </ul>
        </nav>
    </header>
    );
}