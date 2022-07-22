<template>
    <form action="#">
        <div class="input_holder">
            <label for="name">Name</label>
            <input type="text" name="name" id="userName" v-model="fullName">
        </div>
        <p id="mailerr">Please enter your name.</p>
        <div class="input_holder">
            <label for="email">Email</label>
            <input type="email" name="email" id="userEmail" v-model="email">
        </div>
        <p id="mailerr">Please enter your name.</p>
        <div class="input_holder">
            <label for="shopname">Shop Name</label>
            <input type="text" name="shopname" id="shopName" v-model="shopName">
        </div>
        <p id="mailerr">Please enter your name.</p>
        <div class="input_holder">
            <label for="password">Password</label>
            <input type="password" name="password" id="userPassword" v-model="password">
        </div>
        <p id="mailerr">Please enter your name.</p>
        <div class="input_holder">
            <label for="password1">Password Confirm</label>
            <input type="password" name="password1" id="userPassword1" v-model="confirmPassword">
        </div>
        <p id="passerr">Please enter your password.</p>
    </form>
    <button @click.prevent="signUp">Sign up</button>
</template>
<script>
import axios from "axios"
export default {
    name: 'Signup Form',
    data() {
        return {
            fullName: '',
            email: '',
            shopName: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        async signUp() {
            if (this.fullName.trim() !== '') {
                const response = await axios.post("https://enyata-inventory.herokuapp.com/api/v1/auth/signup", {
                    "fullName": this.fullName,
                    "email": this.email,
                    "shopName": this.shopName,
                    "password": this.password,
                    "confirmPassword": this.confirmPassword
                })
                console.log(response)
            }
        }
    }
}
</script>
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
    margin-bottom: 32px;
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
    background: #2656D1;
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
</style>