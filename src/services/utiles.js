export default function setLocalHost(username, email, token, auth, image) {
  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
  localStorage.setItem('token', token);
  localStorage.setItem('image', image);
  localStorage.setItem('auth', auth);
}
