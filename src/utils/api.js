const url = 'https://norma.nomoreparties.space/api/ingredients'

export default function getIngredients() {
  return fetch(`${url}`)
    .then(checkResponse)
}

const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

