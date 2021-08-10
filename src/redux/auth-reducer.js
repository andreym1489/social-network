import {authAPI} from "../API/API";
import {stopSubmit} from "redux-form"

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data

            }
        default:
            return state;
    }
}

const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (userData) => async (dispatch) => {
    let response = await authAPI.login(userData)

    if (response.data.resultCode === 0) {
        alert('Вы успешно авторизованы')
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        alert('Вы успешно вышли с аккаунта')
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;