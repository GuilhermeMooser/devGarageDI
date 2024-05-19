import { Routes, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn/signIn';
import SignUp from '../pages/SignUp/signUp';
import Home from '../pages/Home/home';
import Comunidade from '../pages/Comunidade/comunidade';
import Error from '../pages/Error/error';
import BMW from '../pages/BMW/bmw';
import PORSCHE from '../pages/PORSCHE/porsche';

import Private from './Private'

function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={ <SignIn/> } />
      <Route path="/cadastro" element={ <SignUp/> } />
      <Route path="/home" element={ <Private><Home/></Private> } />
      <Route path="/comunidade" element={ <Private><Comunidade/></Private> } />
      <Route path="/bmw" element={<Private><BMW/></Private>} />
      <Route path="/porsche" element={<Private><PORSCHE/></Private>} />
      <Route path="/*" element={<Private><Error/></Private>} /> 
    </Routes>
  )
}

export default RoutesApp;