<template>
    <div class="whole">
        <userBoard></userBoard>
        <div class="right-side">
            <nav>
                <div class="user">AM</div>
                <h1>Akaba Malcolm</h1>
            </nav>

            <div class="down">
                <h2>Update your account.</h2>
                <form action="#">
                    <div class="input_holder">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="userName" v-model="fullName" placeholder="Change your name">
                    </div>
                    <div class="input_holder">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="userEmail" v-model="email" placeholder="Change your email">
                    </div>
                    <div class="input_holder">
                        <label for="shopname">Shop Name</label>
                        <input type="text" name="shopname" id="shopName" v-model="shopName"
                            placeholder="Change your shop name">
                    </div>
                    <div class="input_holder">
                        <label for="old password">Old Password</label>
                        <input type="password" name="password" v-model="password" placeholder="Enter your old password">
                    </div>
                    <div class="input_holder">
                        <label for="new password">New Password</label>
                        <input type="password" name="password" v-model="password" placeholder="Enter your old password">
                    </div>
                </form>
                <button type="submit">SUBMIT</button>
            </div>
        </div>
    </div>
</template>

<script>
import userBoard from '@/components/UserBoard.vue'
export default {
    name: 'Account',
    components: {
        userBoard
    }
}
</script>

<style scoped>
.whole {
    display: flex;
    /* height: 100vh; */
}

button {
    margin-top: 20px;
    padding: 10px;
    width: 50%;
    border-radius: 8px;
    border: none;
    background-color: #3A3F46;
    color: #FFFFFF;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
}

.right-side {
    width: 1120px;
}

nav {
    height: 80px;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 20px 48px 20px 0;
    gap: 14px;
}

.user {
    width: 40px;
    height: 40px;
    background: #B2BDFA;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: #4057D3;
}

h1 {
    width: 111px;
    height: 24px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #000000;
}

label {
    display: block;
    height: 30px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    color: #3A3F46;
}

h2 {
    display: block;
    height: 44px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 150%;
    color: #000000;
}

input {
    width: 50%;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #CED1D9;
    border-radius: 4px;
    padding-left: 5px;
}

input:focus-visible {
    color: #3A3F46;
}

.down {
    position: relative;
    display: block;
    padding-left: 50px;
    padding-top: 20px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
