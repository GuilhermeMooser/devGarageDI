
import { Routes, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn/signIn';
import SignUp from '../pages/SignUp/signUp';
import Home from '../pages/Home/home';
import Error from '../pages/Error/error';
import PORSCHE from '../pages/PORSCHE/porsche';
import Private from './Private';
import BMW from '../pages/BMW/bmw';

function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/cadastro" element={<SignUp />} />
      <Route path="/home" element={<Private><Home/></Private>} />
      <Route path="/bmw" element={<Private><BMW /></Private>} />
      <Route path="/porsche" element={<Private><PORSCHE/></Private>} />
      <Route path="/*" element={<Private><Error/></Private>} /> 
    </Routes>
  )
}

export default RoutesApp;
