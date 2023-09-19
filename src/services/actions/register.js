import { postRegister } from "../../utils/api"

export const POST_REGISTER_REQUEST = 'POST_REGISTER_REQUEST'
export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS'
export const POST_REGISTER_FAILED = 'POST_REGISTER_FAILED'

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