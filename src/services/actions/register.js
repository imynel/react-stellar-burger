import { postRegister, getUserApi, postLogout } from "../../utils/api"

export const POST_REGISTER_REQUEST = 'POST_REGISTER_REQUEST'
export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS'
export const POST_REGISTER_FAILED = 'POST_REGISTER_FAILED'
export const SET_AUTH_CHECKED = 'SET_AUTH_CHECKED'
export const SET_USER = 'SET_USER'


export const getUser = () => {
    return function(dispatch) {
        return getUserApi().then((res) => {
            dispatch(setUser(res.user))
        })
    }
} 

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
})

export const setAuthChecked = (value) => ({
    type: SET_AUTH_CHECKED,
    payload: value,
})

export const login = () => {
    return function(dispatch) {

    }
}

export const logout = (token) => {
    return function(dispatch) {
        postLogout(token)
            .then((res) => {
                console.log(res)
            })
    }
}

export const postRegisterProfile = (email, password, name) => {
    return function(dispatch) {
        dispatch({
            type: POST_REGISTER_REQUEST,
        })
        postRegister(email, password, name)
            .then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: POST_REGISTER_SUCCESS,
                        payload: res
                    });
                    localStorage.setItem('accessToken', res.accessToken)
                    localStorage.setItem('refreshToken', res.refreshToken)
                    dispatch(setUser(res.user))
                    dispatch(setAuthChecked(true))
                } else {
                    dispatch({
                        type: POST_REGISTER_FAILED,
                    });
                }
            })
            .catch(() => {
                dispatch({
                  type: POST_REGISTER_FAILED,
                });
              });
    }
}

export const checkUserAuth = () => {
    return function(dispatch) {
        if (localStorage.getItem('accessToken')) {
            dispatch(getUser())
                .catch(() => {
                    localStorage.removeItem('accessToken')
                    localStorage.removeItem('refreshToken')
                    dispatch(setUser(null))
                    dispatch(setAuthChecked(true))
                })
                .finally(() => {
                    dispatch(setAuthChecked(true))
                })
        } else {
            dispatch(setAuthChecked(true))
        }
    }
}