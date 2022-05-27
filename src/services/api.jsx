const urlUsers = 'https://lab-api-bq.herokuapp.com/users';
const urlAuth = 'https://lab-api-bq.herokuapp.com/auth';

const createUser = (nameUser, emailUser, passwordUser, role) => {
  return fetch(urlUsers, {
    method:'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
      name: nameUser,
      email: emailUser,
      password: passwordUser,
      role: role,
      restaurant: 'White Castle'
    })

  })
}
const userLogin = (emailUser, passwordUser) => {
  return fetch(urlAuth, {
    method:'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
      email:emailUser,
      password:passwordUser,
    })
  })
}