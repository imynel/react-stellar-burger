import { postEmail } from "../../utils/api";

export const POST_EMAIL_REQUEST  = 'POST_EMAIL_REQUEST'
export const POST_EMAIL_SUCCESS = 'POST_EMAIL_SUCCESS'
export const POST_EMAIL_FAILED = 'POST_EMAIL_FAILED'

export const postEmailreset = () => {
    return function(dispatch) {
        dispatch({
            type: POST_EMAIL_REQUEST,
        })
        postEmail()
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