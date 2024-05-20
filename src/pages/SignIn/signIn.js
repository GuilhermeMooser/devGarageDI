import { useState, useContext } from 'react'
import './SignIn.css'
import '../../assets/style.css'
import imgLogo from '../../assets/imgs/logo.png'


import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'

export default function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, loadingAuth } = useContext(AuthContext)

  async function handleSignIn(e){
    e.preventDefault();

    if(email !== '' && password !== ''){
      await signIn(email, password);
    }

  }

  return(
    <span className='signIn'>
      <div className="container-center">
        <div className="login">
        <div className="login-area logo-adjust">
          <img src={imgLogo} alt="Logo" />
        </div>
          <form onSubmit={handleSignIn}>
            <h1 className='abril-fatface-regular'>Bem-Vindo !!</h1>
            <input 
              type="text" 
              placeholder="Email@email.com"
              value={email}
              onChange={ (e) => setEmail(e.target.value) }
            />

            <input 
              type="password" 
              placeholder="********"
              value={password}
              onChange={ (e) => setPassword(e.target.value) }
            />

            <button type="submit">
              {loadingAuth ? "Carregando..." : "Acessar"}
            </button>
          </form>

          <Link to="/cadastro">Criar uma conta</Link>

        </div>
      </div>
    </span>
  )
}