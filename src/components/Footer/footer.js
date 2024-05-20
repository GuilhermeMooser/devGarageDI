import { useContext } from 'react'
import {Link} from 'react-router-dom';


import imgLogo from '../../assets/imgs/logo.png'
import {AuthContext} from '../../contexts/auth'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="final">
                    <div className="final-img">
                        <img src={imgLogo} alt="DevGarage"></img>
                    </div>
                    <div className="final-details">
                        <h2>Conecte-se conosco</h2>
                        <p>Centro Universitário Campo Real<br></br>Engenharia de Software<br></br>Guarapuava-PR</p>
                        <p>contato@devgarage.com.br</p>
                    </div>
                </div>
            </footer>
        </>
    )
    
}