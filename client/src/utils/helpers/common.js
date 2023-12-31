import axios from 'axios'

export const axiosFPL = axios.create({
  baseURL: import.meta.env.MODE === 'development' ? '/' : 'https://corsproxy.io/?' + encodeURIComponent('https://fantasy.premierleague.com/')
})
 
axiosFPL.interceptors.request.use(config => {
  if (import.meta.env.MODE === 'production') {
    config.url = config.url.replace(/^\/rest/, '/api')
  }
  console.log(config)
  return config
})

export const axiosChelsea = axios.create({
  baseURL: import.meta.env.MODE === 'development' ? '/' : 'https://corsproxy.io/?' + encodeURIComponent('https://www.chelseafc.com/en')
})
 
axiosChelsea.interceptors.request.use(config => {
  if (import.meta.env.MODE === 'production') {
    config.url = config.url.replace(/^\/plt/, '/api')
  }
  console.log(config)
  return config
})

const tokenName = 'LEGENDS-OF-THE-TURF-TOKEN'


// This function takes a request object and returns form data as a JS object
export async function formToObj(request){
  const formData = await request.formData()
  return Object.fromEntries(formData.entries())
}

export function setToken(token){
  localStorage.setItem(tokenName, token)
}

export function getToken(){
  return localStorage.getItem(tokenName)
}

export function removeToken(){
  localStorage.removeItem(tokenName)
}

// This function will decode the JWT token in our localstorage
// If the token does not exist, will return null
// If the token exists, we will decode, validate expiry date, return the payload.sub
export function activeUser(){
  // Get token from localstorage
  const token = getToken()
  if (!token) return null

  // If token exists
  const b64 = token.split('.')[1]
  const payload = JSON.parse(atob(b64))

  const now = Date.now() / 1000
  const exp = payload.exp
  if (exp > now) {
    console.log(payload)
    return payload.sub
  }
}