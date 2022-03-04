const setLocalHost = (username, email, token, image, auth ) => {

    console.log( username, email, token, image, auth)
    localStorage.setItem('username',username)
    localStorage.setItem('email',email)
    localStorage.setItem('token',token)
    localStorage.setItem('image',image)
    localStorage.setItem('auth',auth)
}




export default setLocalHost