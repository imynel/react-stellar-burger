import { postRegister, getUserApi } from "../../utils/api"

export const POST_REGISTER_REQUEST = 'POST_REGISTER_REQUEST'
export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS'
export const POST_REGISTER_FAILED = 'POST_REGISTER_FAILED'
export const SET_AUTH_CHECKED = 'SET_AUTH_CHECKED'
export const SET_USER = 'SET_USER'


export const getUser = () => {
    return (dispatch) => {
        getUserApi().then((res) => {
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
                })
                .finally(() => {
                    dispatch(setAuthChecked(true))
                })
        } else {
            dispatch(setAuthChecked(true))
        }
    }
}