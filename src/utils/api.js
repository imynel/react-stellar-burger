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


const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

