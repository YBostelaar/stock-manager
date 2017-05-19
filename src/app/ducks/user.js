import createAction from 'services/createAction';
import { firebaseAuth } from 'config/firebase';
import { browserHistory } from 'react-router';

const REGISTER_PENDING = 'REGISTER_PENDING';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAILED = 'REGISTER_FAILED';

const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';

const LOGOUT_PENDING = 'LOGOUT_PENDING';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAILED = 'LOGOUT_FAILED';

const initialState = {
    success: false,
    error: false,
    loading: false,
    authenticated: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case REGISTER_SUCCESS:
        return {
            ...state,
            success: payload.passed,
            loading: false,
        };
    case LOGIN_SUCCESS:
        return {
            ...state,
            loading: false,
            authenticated: true,
        };
    case LOGOUT_SUCCESS:
        return {
            ...state,
            loading: false,
            authenticated: false,
        };
    case REGISTER_FAILED:
    case LOGIN_FAILED:
    case LOGOUT_FAILED:
        return {
            ...state,
            error: true,
            loading: false,
        };
    case REGISTER_PENDING:
    case LOGIN_PENDING:
    case LOGOUT_PENDING:
        return {
            ...state,
            loading: true,
            error: false,
        };
    default:
        return state;
    }
};

export const registerSuccess = createAction(REGISTER_SUCCESS);
export const registerFailed = createAction(REGISTER_FAILED);

export const register = () => (dispatch, getState) => {
    dispatch({ type: REGISTER_PENDING });

    const email = getState().form.register.values.email;
    const password = getState().form.register.values.password;

    firebaseAuth.createUserWithEmailAndPassword(email, password).then(() => {
        browserHistory.push('/login');
    }).catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;

        console.log(errorCode, errorMessage);
    });
};

export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailed = createAction(LOGIN_FAILED);

export const login = () => (dispatch, getState) => {
    dispatch({ type: LOGIN_PENDING });

    const email = getState().form.login.values.email;
    const password = getState().form.login.values.password;

    firebaseAuth.signInWithEmailAndPassword(email, password).then(() => {
        dispatch(loginSuccess());
        browserHistory.push('/');
    }).catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;

        console.log(errorCode, errorMessage);
    });
};

export const logoutSuccess = createAction(LOGOUT_SUCCESS);
export const logoutFailed = createAction(LOGOUT_FAILED);

export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT_PENDING });

    firebaseAuth.signOut().then(() => {
        dispatch(logoutSuccess());
        browserHistory.push('/login');
    }).catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;

        console.log(errorCode, errorMessage);
    });
};
