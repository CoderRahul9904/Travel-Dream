import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from '../slices/UserSlice';

function AuthGoogle() {

  const dispatch = useDispatch();
  const { isLoggedIn, googleToken } = useSelector((state) =>state.user)

  const googleId = '124526521008-qbc8uhv8i9kun6ciq2db6pgc2sdfujps.apps.googleusercontent.com';

  const handleGoogleLogin = (response) => {
    console.log('Login Success:', response);
    const token = response.credential;
    localStorage.setItem('googleToken', token);
    dispatch(login({ googleToken: token }));
  };

  const handleUnsuccessfulGoogleLogin = (response) => {
    console.error('Login Failed:', response);
  };

  return (
    <GoogleOAuthProvider clientId={googleId}>
      <GoogleLogin
        onSuccess={handleGoogleLogin}
        onError={handleUnsuccessfulGoogleLogin}
        useOneTap={false}
      />
    </GoogleOAuthProvider>
  );
}

export default AuthGoogle;
