import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Login.css';

const Login = () => {
    const {error, signInWithGoogle} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const handleGoogleBtn = () => {
      signInWithGoogle(location, navigate)
      
    }
    return (
        <>
        <Navigation></Navigation>
          <div className="text-center login">
            <button onClick={handleGoogleBtn} className="my-5 w-50 btn btn-info text-white"><i class="fab fa-google"></i> Sing In With Google</button>
            {
              error && <p className="my-4 text-danger">Error: {error}</p>
            }
          </div> 
          <Footer></Footer>
        </>
    );
};

export default Login;