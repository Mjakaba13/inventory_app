<template>
  <div class="home">
    <div class="left">
      <div class="left-child">
        <nav>
          <img src="@/assets/Group2.svg" alt="">
        </nav>
        <h1>Sign up</h1>
        <hr>
        <p>Register now and start managing your inventory like a boss</p>
        <signupform></signupform>
        <h2>Already have an account? <router-link to="/">Login</router-link>
        </h2>
      </div>
    </div>

    <div class="right">
      <img src="@/assets/Subscriber-bro1.svg" alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import signupform from '@/components/SignupForm.vue'

export default {
  name: 'SignupView',
  components: {
    signupform
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
  width: 467px;
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
  background: #2656D1;
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



.left-child {
  width: 76%;
  margin: 32px auto 145px auto;
}

.left a {
  text-decoration: none;
}


/* Styling for the right side  */
.right {
  background: #2656d1;
  width: 67%;

}

.right img {
  display: block;
  margin: 142px auto 302px auto;
  width: 67%;
}
</style>