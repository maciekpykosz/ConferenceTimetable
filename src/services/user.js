export const login = (token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('token-expiration', Date.now() + 60 * 60 * 1000);
}

export const logout = () => {
    localStorage.removeItem('token')
}

export const isAuthenticated = () => {
    return localStorage.getItem('token') && localStorage.getItem('token-expiration') > Date.now()
}
