import React from "react";
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {

    const authUser = () => {
        let userIsLoggedIn = false;
        let userData = sessionStorage.getItem("userData");
        if (userData != null) {
            userData = JSON.parse(userData);
            if (userData.isLoggedIn) {
                userIsLoggedIn = true;
            }
        }
        return userIsLoggedIn;
    }

    return (
        <Route
            {...rest}
            render={(props) => authUser() === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />} />
    )
}

export default PrivateRoute;