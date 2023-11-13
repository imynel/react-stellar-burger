import { postEmail } from "../../utils/api";
import { postPassword } from "../../utils/api";

export const POST_EMAIL_REQUEST: 'POST_EMAIL_REQUEST'  = 'POST_EMAIL_REQUEST'
export const POST_EMAIL_SUCCESS: 'POST_EMAIL_SUCCESS' = 'POST_EMAIL_SUCCESS'
export const POST_EMAIL_FAILED: 'POST_EMAIL_FAILED' = 'POST_EMAIL_FAILED'

export const POST_PASSWORD_REQUEST: 'POST_PASSWORD_REQUEST' = 'POST_PASSWORD_REQUEST'
export const POST_PASSWORD_SUCCESS: 'POST_PASSWORD_SUCCESS' = 'POST_PASSWORD_SUCCESS'
export const POST_PASSWORD_FAILED: 'POST_PASSWORD_FAILED' = 'POST_PASSWORD_FAILED'

type postEmailRequestAction = {
    readonly type: typeof POST_EMAIL_REQUEST
}

type postEmailSuccessAction = {
    readonly type: typeof POST_EMAIL_SUCCESS
}

type postEmailFailedAction = {
    
    readonly type: typeof POST_EMAIL_FAILED 
}
type postPasswordRequestAction = {
    readonly type: typeof POST_PASSWORD_REQUEST
}

type postPasswordSuccesAction = {
    readonly type: typeof POST_PASSWORD_SUCCESS
}

type postPasswordFailedAction = {
    readonly type: typeof POST_PASSWORD_FAILED
}

type TPasswordActions = postEmailRequestAction | postEmailSuccessAction | postEmailFailedAction | postPasswordRequestAction | postPasswordSuccesAction | postPasswordFailedAction



export const postEmailReset = (email) => {
    return function(dispatch) {
        dispatch({
            type: POST_EMAIL_REQUEST,
        })
        postEmail(email)
            .then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: POST_EMAIL_SUCCESS,
                        payload: res
                    });
                } else {
                    dispatch({
                        type: POST_EMAIL_FAILED,
                    });
                }
            })
            .catch(() => {
                dispatch({
                  type: POST_EMAIL_FAILED,
                });
              });
    }
}

export const postPasswordReset = (password, token) => {
    return function(dispatch) {
        dispatch({
            type: POST_PASSWORD_REQUEST,
        })
        postPassword(password, token)
            .then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: POST_PASSWORD_SUCCESS,
                        payload: res
                    });
                } else {
                    dispatch({
                        type: POST_PASSWORD_FAILED,
                    });
                }
            })
            .catch(() => {
                dispatch({
                  type: POST_PASSWORD_FAILED,
                });
              });
    }
}

