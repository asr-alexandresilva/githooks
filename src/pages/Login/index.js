import React, { useState, useEffect } from 'react';
import * as S from './styles';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

function Login() {
    const [userLogin, setUserLogin] = useState({ name: '', email: '', imageUrl: '', isLoggedIn: false });
    const authGoogle = (response, error) => {
        console.log(error)
        try {
            if (typeof response.accessToken !== 'undefined') {
                const { profileObj: { name, email, imageUrl }, tokenObj } = response;
                setUserLogin({
                    name: name,
                    email: email,
                    imageUrl: imageUrl,
                    isLoggedIn: true
                });
            } else {
                throw new Error('Erro ao efetuar login ou usuario deslogado.');
            }
        } catch (error) {
            setUserLogin({
                name: '',
                email: '',
                imageUrl: '',
                isLoggedIn: false
            });
        }
    }
    return (
        <S.Container>
            <h1 className="title">Login</h1>
            <div className="contentLogin">
                <GoogleLogin
                    clientId="566573102654-q64ko73loqd4c9q60vsgl64f9rmeucg7.apps.googleusercontent.com"
                    buttonText="Continuar com Google"
                    onSuccess={authGoogle}
                    onFailure={authGoogle}
                    isSignedIn={true}
                ></GoogleLogin>
                <GoogleLogout
                    clientId="566573102654-q64ko73loqd4c9q60vsgl64f9rmeucg7.apps.googleusercontent.com"
                    buttonText="Sair"
                    onLogoutSuccess={authGoogle}
                >
                </GoogleLogout>
            </div>
            <p>Nome: {userLogin.name}</p>
            <p>E-mail: {userLogin.email}</p>
            <p>Foto: <img src={userLogin.imageUrl}></img></p>
        </S.Container>
    )
}

export default Login;