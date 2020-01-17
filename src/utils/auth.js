import Cookies from 'js-cookie'

const TOKEN = 'token'

export function setToken(token) {
  Cookies.set(TOKEN, token)
}

export function getToken(token) {
  Cookies.get(TOKEN)
}

export function clearToken(token) {
  Cookies.remove(TOKEN)
}
