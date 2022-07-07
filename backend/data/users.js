exports.USERS = [
  {
    "id": 1,
    "name": "Nick Jantz",
    "email": "nick@gmail.com",
    "password": "nickpassword",
    // HS256 encoded jwt including keys: permissions, name, and email, verified using the base64 encoded secret 'contrast'
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6ImFkbWluIiwibmFtZSI6Ik5pY2siLCJlbWFpbCI6Im5pY2tAZ21haWwuY29tIn0.f-Dj5etP9fBIGviGEWfUTO_NbjwZcay2bjnNfiMIMes",
    // array of course IDs the user is currently enrolled in
    "courses": [1,3]
  },
  {
    "id": 2,
    "name": "Antoan Popov",
    "email": "antoan@gmail.com",
    "password": "antoanpassword",
    // HS256 encoded jwt including keys: permissions, name, and email, verified using the base64 encoded secret 'contrast'
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6ImFkbWluIiwibmFtZSI6IkFudG9hbiIsImVtYWlsIjoiYW50b2FuQGdtYWlsLmNvbSJ9.VIqylAAFDJ0KecqPF8_5UopZEmz5qd6ARZtZ4AJ0YYA",
    // array of course IDs the user is currently enrolled in
    "courses": [1,3,5,7]
  }
]

exports.loginUser = (username, password) => {
  if(this.USERS.find(user => user.email === username && user.password === password)) {
    return this.USERS.find(user => user.email === username && user.password === password)
  }
  return {};
}
