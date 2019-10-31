class User {
  login(data) {
    axios
      .post('/api/auth/login', data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
}

export default User = new User();
