import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';

function PrivateRoute({ component: Component, ...rest }) {
    const {isSignedIn} = useGoogleLogin({isSignedIn: true});

    const authUser = () => {
        console.log(isSignedIn)
        return true;
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