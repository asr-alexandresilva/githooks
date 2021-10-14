import { createStore } from 'redux';

// stado
const INITIAL_STATE = {
    data: {name: '', email: '', imageUrl: '', isLoggedIn: false},
};

// reducer => ele recebe um estado e uma action
function userLogin(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_USER_LOGIN':
        return { ...state, data: action.user }
        default:
            return state;
    }
}

const store = createStore(userLogin);

export default store;
