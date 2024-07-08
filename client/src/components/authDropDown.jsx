import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from "react-redux";

import { login, logout } from '../slices/UserSlice';

function AuthGoogle() {

  const dispatch = useDispatch();
  const { isLoggedIn, googleToken } = useSelector((state) =>state.user)

  const googleId = '124526521008-qbc8uhv8i9kun6ciq2db6pgc2sdfujps.apps.googleusercontent.com';

  const handleGoogleLogin = async (response) => {
    console.log('Login Success:', response);
    const token = response.credential;
    localStorage.setItem('googleToken', token);
    try {
      
      const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          'Authorization': `Bearer ${response.access_token}`
        }
      });

      if (!userInfoResponse.ok) {
        throw new Error('Failed to fetch user profile');
      }

      const data = await userInfoResponse.json();
      console.log('Profile Data:', data);
      
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
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
        scope="https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
      />
    </GoogleOAuthProvider>
  );
}

export default AuthGoogle;
