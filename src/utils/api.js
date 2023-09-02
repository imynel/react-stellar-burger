const url = 'https://norma.nomoreparties.space/api/'

export function getIngredients() {
  return fetch(`${url}ingredients`)
    .then(checkResponse)
}

export function postIngredients(id) {
  return fetch(`${url}orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'ingredients': id,
    })
  } 
  ) .then(checkResponse)
    
}

const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

