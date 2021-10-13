import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from "../components/auth"; // autentica rotas
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> {/* Nao deixa mais de uma rota ser chamada ao mesmo tempo */}
                <PrivateRoute path="/" exact component={Home}></PrivateRoute> {/* "exact" -> garante que seja chamada a rota exata */}
                <Route path="/login" exact component={Login}></Route>
                <Route path="*" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}