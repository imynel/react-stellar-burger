const url = 'https://norma.nomoreparties.space/api/'

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

export function postRegister(email, password, name) {
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
  })
  .then(checkResponse)
}

export function postSignIn(email, password) {
  return fetch(`${url}auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'email': email,
      'password': password,
    })
  })
  .then(checkResponse)
}

export function postLogout(refreshToken) {
  return fetch(`${url}auth/logout`, {
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



const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

