<template>
  <form action="#">
    <div class="input_holder">
      <label for="email">Email</label>
      <input type="email" name="email" id="userEmail" v-model="email">
    </div>
    <p id="mailerr">Please enter your name.</p>
    <div class="input_holder">
      <label for="password">Password</label>
      <input type="password" name="password" id="userPassword" v-model="password">
    </div>
    <p id="passerr">Please enter your password.</p>
    <p id="wrong">Incorrect user login details.</p>
  </form>

  <button @click.prevent="signIn">Login</button>
</template>

<script>
import axios from "axios"
// import { mapActions, mapGetters } from "vuex";
export default {
  name: 'Login Form',
  data() {
    return {
      email: '',
      password: '',
      isLoggedin: false,
    }
  },
  methods: {
    async signIn() {
      if (this.email.trim() !== '' && this.password !== '') {
        const response = await axios.post("http://localhost:8081/api/login", {
          "email": this.email,
          "password": this.password,
        })
        this.email = ''
        this.password = ''
        console.log(response)
        if (response.data.message === 'User login successful') {
          localStorage.setItem("id", response.data.data._id);
          // console.log(Object.keys(response.data.data.user));
          this.$router.push('/dashboard');
          console.log(response.data.message)
          this.isLoggedin = true
          console.log(this.isLoggedin)
          mailerr.style.display = "none"
          passerr.style.display = "none"
        }
      } else if (this.email === '' && this.password === '') {
        mailerr.style.display = "block"
        passerr.style.display = "block"
      }
      else if (this.email === '') {
        mailerr.style.display = "block"
      } else if (this.password === '') {
        passerr.style.display = "block"
      }
      else {
        console.warn('be serious')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input_holder {
  width: 76%;
}

label {
  display: block;
  height: 24px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #3A3F46;
}

input {
  width: 130%;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid #CED1D9;
  border-radius: 4px;
}

form {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 40px;
  padding-top: 48px;

}

button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 100%;
  height: 56px;
  background: #873AB6;
  box-shadow: 0px 16px 24px rgba(38, 86, 209, 0.2);
  border-radius: 8px;
  border: none;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 16px;
}

button:hover {
  cursor: pointer;
}

p {
  display: none;
  padding: 5px;
  background-color: red;
  color: white;
  border-radius: 8px;
}

a {
  text-decoration: none;
}
</style>
