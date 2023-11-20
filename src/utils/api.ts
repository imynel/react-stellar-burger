import { AppThunk } from "../services/types";
import { IHeaders, IIngredientResponse, IOptions, IRegisterResponse, IResponse } from "../services/types/api";
import { TOrder } from "../services/types/types";

const url = 'https://norma.nomoreparties.space/api/'
export const WSS_URL = 'wss://norma.nomoreparties.space/orders'


const fetchWithRefresh = async (url: string, options: IOptions) => {
  try {
    const res = await fetch(url, options); //делаем запрос
    return await checkResponse(res);
  } catch (err) {
    if (err instanceof Error) {
      if (err.message === "jwt expired") {
        const refreshData = await refreshToken(); //обновляем токен
        if (!refreshData.success) {
          return Promise.reject(refreshData);
        }
        localStorage.setItem("refreshToken", refreshData.refreshToken);
        localStorage.setItem("accessToken", refreshData.accessToken); //(или в cookies)
        options.headers.authorization = refreshData.accessToken;
        const res = await fetch(url, options); //вызываем перезапрос данных
        return await checkResponse(res);
      } else {
        return Promise.reject(err);
      }
    }
  }
};

const refreshToken = (): Promise<IResponse> => {
  return fetch(`${url}auth/token`, {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken')
    })
  }).then(checkResponse<IResponse>)
}

export function getIngredients(): Promise<IIngredientResponse> {
  return fetch(`${url}ingredients`)
    .then(checkResponse<IIngredientResponse>)
}

export function postOrderNumber(id: string[]) {
  return fetch(`${url}orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('accessToken')
    } as IHeaders,
    body: JSON.stringify({
      'ingredients': id,
    })
  } 
  )
   .then(checkResponse<TOrder>)    
}

export function postEmail(email: string) {
  return fetch(`${url}password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'email': email
    })
  })
  .then(checkResponse)
}

export function postPassword(password: string, token: string) {
  return fetch(`${url}password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'password': password,
      'token': token,
    })
  })
  .then(checkResponse)
}

export const postRegister = async (email: string, password: string, name: string) => {
  return fetch(`${url}auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'email': email,
      'password': password,
      'name': name,
    })
  }).then(checkResponse<IRegisterResponse>)
}

export const postSignIn = async (email: string, password: string) => {
  return fetch(`${url}auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'email': email,
      'password': password,
    })
  }).then(checkResponse<IRegisterResponse>)
}




export const postLogout = async (refreshToken: string) => {
  return fetchWithRefresh(`${url}auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'token': refreshToken
    })
  })
}

export function postToken(refreshToken: string) {
  return fetch(`${url}auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'token': refreshToken
    })
  })
  .then(checkResponse)
}

export const getUserApi = async () => {
  return fetchWithRefresh(`${url}auth/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('accessToken')
    } as IHeaders
  }) as Promise<IRegisterResponse>
}

export const patchRefreshUser = async (email: string, name: string, password: string) => {
  return fetchWithRefresh(`${url}auth/user`, {
    method: 'PATCH',
    headers: {
      Authorization: localStorage.getItem('accessToken'),
      "Content-Type": 'application/json'
    } as IHeaders,
    body: JSON.stringify({
      'email': email,
      'name': name,
      'password': password,
    })
  }) as Promise<IRegisterResponse>
}

const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

