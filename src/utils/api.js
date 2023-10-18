const url = 'https://norma.nomoreparties.space/api/'
export const WSS_URL = 'wss://norma.nomoreparties.space/orders'


const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options); //делаем запрос
    return await checkResponse(res);
  } catch (err) {
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken(); //обновляем токен
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken); //(или в cookies)
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options); //вызываем перезапрос данных
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

const refreshToken = () => {
  return fetch(`${url}auth/token`, {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken')
    })
  }).then(checkResponse)
}

export function getIngredients() {
  return fetch(`${url}ingredients`)
    .then(checkResponse)
}

export function postOrderNumber(id) {
  return fetch(`${url}orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'ingredients': id,
    })
  } 
  )
   .then(checkResponse)    
}

export function postEmail(email) {
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

export function postPassword(password, token) {
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

export const postRegister = async (email, password, name) => {
  const response = await fetchWithRefresh(`${url}auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'email': email,
      'password': password,
      'name': name,
    })
  })
  
  return response
}

export const postSignIn = async (email, password) => {
  const response = await fetchWithRefresh(`${url}auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'email': email,
      'password': password,
    })
  })

  return response
}




export const postLogout = async (refreshToken) => {
  const response = fetchWithRefresh(`${url}auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'token': refreshToken
    })
  })
  return response
}

export function postToken(refreshToken) {
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
  const response = await fetchWithRefresh(`${url}auth/user`, {
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem('accessToken')
    }
  })
  return response
}

export const patchRefreshUser = async (email, name, password) => {
  const response = await fetchWithRefresh(`${url}auth/user`, {
    method: 'PATCH',
    headers: {
      Authorization: localStorage.getItem('accessToken'),
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      'email': email,
      'name': name,
      'password': password,
    })
  })

  return response
}

const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

