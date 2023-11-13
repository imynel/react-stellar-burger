import { postRegister, getUserApi, postLogout, postSignIn, patchRefreshUser } from "../../utils/api"

export const POST_REGISTER_REQUEST: 'POST_REGISTER_REQUEST' = 'POST_REGISTER_REQUEST'
export const POST_REGISTER_SUCCESS: 'POST_REGISTER_SUCCESS' = 'POST_REGISTER_SUCCESS'
export const POST_REGISTER_FAILED: 'POST_REGISTER_FAILED' = 'POST_REGISTER_FAILED'
export const SET_AUTH_CHECKED: 'SET_AUTH_CHECKED' = 'SET_AUTH_CHECKED'
export const SET_USER: 'SET_USER' = 'SET_USER'

type postRegisterRequestAction = {
    readonly type: typeof POST_REGISTER_REQUEST
}

type postRegisterSuccessAction = {
    readonly type: typeof POST_REGISTER_SUCCESS
}

type postRegisterFailedAction = {
    readonly type: typeof POST_REGISTER_FAILED
}

type setAuthCheckedAction = {
    readonly type: typeof SET_AUTH_CHECKED
}

type setUserAction = {
    readonly type: typeof SET_USER;
    readonly payload: any;
}



export const getUser = () => {
    return function(dispatch) {
        return getUserApi().then((res) => {
            dispatch(setUser(res.user))
        })
    }
} 

export const refreshUser = (email: string, name: string, password: string) => {
    return function(dispatch) {
        patchRefreshUser(email, name, password)
            .then((res) => {
                dispatch(setUser(res.user))
            })
    }
}

export const setUser = (user: any): setUserAction => ({
    type: SET_USER,
    payload: user,
})

export const setAuthChecked = (value) => ({
    type: SET_AUTH_CHECKED,
    payload: value,
})

export const login = (email: string, password: string) => {
    return function(dispatch) {
        postSignIn(email, password)
            .then((res) => {
                dispatch(setUser(res.user))
                dispatch(setAuthChecked(true))
                localStorage.setItem('accessToken', res.accessToken)
                localStorage.setItem('refreshToken', res.refreshToken)
            })
            .catch(() => {
                dispatch(setAuthChecked(true))
            })
    }
}

export const logout = () => {
    return function(dispatch) {
        postLogout(localStorage.getItem('refreshToken'))
            .then(() => {
                dispatch(setUser(null))
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
            })
    }
}

export const postRegisterProfile = (email: string, password: string, name: string) => {
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