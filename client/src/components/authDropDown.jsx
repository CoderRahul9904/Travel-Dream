import React from 'react';
import { useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from '../slices/UserSlice';
function AuthGoogle() {
  console.log("working")
  const dispatch = useDispatch();
  const googleToken = useSelector((state) => state.user.googleToken);
  const googleId = '124526521008-qbc8uhv8i9kun6ciq2db6pgc2sdfujps.apps.googleusercontent.com';
  const handleGoogleLogin = async (response) => {
    const token = response.credential;
    localStorage.setItem('googleToken', token);
    console.log('Login Success:', token);
    dispatch(login({ googleToken: token }));
  };
  
  useEffect(() => {
    console.log('Updated googleToken:', googleToken);
  }, [googleToken]);

  const handleUnsuccessfulGoogleLogin = (response) => {
    console.error('Login Failed:', response);
  };

  return (
    <GoogleOAuthProvider clientId={googleId}>
      <GoogleLogin
        onSuccess={handleGoogleLogin}
        onError={handleUnsuccessfulGoogleLogin}
        useOneTap={false}
        scope="https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
      />
    </GoogleOAuthProvider>
  );
}

export default AuthGoogle;
