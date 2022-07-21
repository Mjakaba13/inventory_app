<template>
  <div class="home">
    <div class="left">
      <div class="left-child">
        <nav>
          <img src="@/assets/Group2.svg" alt="">
        </nav>
        <h1>Login</h1>
        <hr>
        <p>Sign in to start managing your inventory like a boss.</p>
        <loginform></loginform>
        <button>Login</button>
        <h2>Don’t have an account?<router-link to="/"> Sign up</router-link>
        </h2>
      </div>
    </div>

    <div class="right">
      <img src="@/assets/login-bro.svg" alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import loginform from '@/components/LoginForm.vue'
export default {
  name: 'LoginView',
  components: {
    loginform
  }
}
</script>

<style scoped>
.home {
  display: flex;

  height: fit-content;
}

/* Styling for the left side */
.left {
  background: #F5F7FC;
  width: 33%;
}

.left h1 {
  width: 76%;
  /* height: 52px; */
  font-family: 'Overpass';
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 130%;
  letter-spacing: -0.06em;
  color: #1D2128;
  margin-top: 88px;
}

.left hr {
  width: 24px;
  height: 5px;
  background: #873AB6;
  margin-bottom: 22px;
}

.left p {
  width: 76%;
  /* height: 54px; */
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #747880;
}

.left h2 {
  width: 76%;
  height: 27px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #000000;
}

.left button {
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

.left button:hover {
  cursor: pointer;
}

.left-child {
  width: 76%;
  margin: 32px auto 145px auto;
}

.left a {
  text-decoration: none;
}


/* Styling for the right side  */
.right {
  background: #873AB6;
  width: 67%;

}

.right img {
  display: block;
  margin: 142px auto 302px auto;
  width: 67%;
}
</style>