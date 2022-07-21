<template>
  <form action="#">
    <div class="input_holder">
      <label for="email">Email</label>
      <input type="email" name="email" id="userEmail">
    </div>
    <div class="input_holder">
      <label for="password">Password</label>
      <input type="password" name="password" id="userPassword">
    </div>
  </form>
</template>

<script>
export default {
  name: 'Login Form',

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
</style>
