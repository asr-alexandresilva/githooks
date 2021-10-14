import React, { useState, useEffect } from 'react';
import * as S from './styles';
import GoogleLogin from 'react-google-login';
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Login() {
    let history = useHistory();
    const authGoogle = (response, error) => {
        try {
            if (typeof response.accessToken !== 'undefined') {
                const { profileObj: { name, email, imageUrl }, tokenObj } = response;

                const loggedUser = {
                    name: name,
                    email: email,
                    imageUrl: imageUrl,
                    isLoggedIn: true
                }

                sessionStorage.setItem("userData", JSON.stringify(loggedUser));
                history.push("/");
            } else {
                throw new Error('Erro ao efetuar login ou usuario deslogado.');
            }
        } catch (error) {
            sessionStorage.removeItem("userData");
        }
    }

    return (
        <S.Container>
            <div className="contentLogin">
                <h1 className="title">Login</h1>
                <h3 className="subTitle"><FontAwesomeIcon icon={faGithub} /> Repositórios <span>Favoritos Alexandre Silva <FontAwesomeIcon className="iconFavorite" icon={faStar} /></span></h3>
                <GoogleLogin
                    clientId="566573102654-q64ko73loqd4c9q60vsgl64f9rmeucg7.apps.googleusercontent.com"
                    buttonText="Continuar com Google"
                    onSuccess={authGoogle}
                    onFailure={authGoogle}
                ></GoogleLogin>
            </div>
        </S.Container>
    )
}

export default Login;