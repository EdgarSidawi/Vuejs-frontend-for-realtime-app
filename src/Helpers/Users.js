import axios from 'axios';

export let user = class User {
  login(data) {
    axios
      .post('/api/auth/login', data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
};

export default user = new user();
