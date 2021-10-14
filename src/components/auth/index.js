import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function PrivateRoute({ component: Component, ...rest }) {
    // action
    const dispatch = useDispatch();

    const authUser = () => {
        let userIsLoggedIn = false;
        let userData = sessionStorage.getItem("userData");
        if (userData != null) {
            userData = JSON.parse(userData);
            if (userData.isLoggedIn) {
                // add valor action
                dispatch({ type: 'ADD_USER_LOGIN', user: userData });
                // ------
                userIsLoggedIn = true;
            }
        } else {
            // add valor action
            dispatch({
                type: 'ADD_USER_LOGIN', user: {
                    name: '',
                    email: '',
                    imageUrl: '',
                    isLoggedIn: false
                }
            });
            // ------
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