<template>
    <div class="whole-side">
        <div class="logo-holder">
            <img src="@/assets/Group1.svg" alt="">
        </div>
        <div class="down">
            <div class="board-links">
                <router-link to="/dashboard">
                    <div id="link" @click="change" :class="[toggle ? dnew : '']">
                        <img src="@/assets/stats.svg" alt="">
                        <p>Dashboard</p>
                    </div>
                </router-link>
                <router-link to="/inventory">
                    <div id="link">
                        <img src="@/assets/inventory.svg" alt="">
                        <p>Inventory</p>
                    </div>
                </router-link>
                <div id="link">
                    <img src="@/assets/category.svg" alt="">
                    <p>Categories</p>
                </div>
                <router-link to="/accountsetting">
                    <div id="link">
                        <img src="@/assets/sett.svg" alt="">
                        <p>Account Settings</p>
                    </div>
                </router-link>
            </div>
            <div class="log">
                <h1>Logout</h1>
                <img src="@/assets/logout.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserBoard',
    data() {
        return {
            toggle: false,
            dnew: 'dnew'
        }
    },
    methods: {
        change() {
            this.toggle = !this.toggle
        }
    }
}
</script>

<style scoped>
.whole-side {
    /* position: sticky; */
    background: #151923;
    /* width: 100%; */
    width: 320px;
    height: 100vh;
}

p {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #FFFFFF;
}

.logo-holder {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 32px;
    gap: 10px;
    width: 100%;
    max-width: 320px;
}

#link {

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 32px 16px 24px;
    gap: 16px;
    background: #151923;
    width: 263px;
    height: 60px;
    border: none;
    border-radius: 8px;
}

a {
    text-decoration: none;
}

.dnew {
    background: #2656D1;

}

#link:hover {
    cursor: pointer;
}

.down {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: space-between; */
    padding-left: 32px;
    gap: 30vh;
    /* height: 719px; */
    width: 320px;
    margin-top: 80px;
    padding-bottom: 8px;
}

.board-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* padding-left: 32px; */
    gap: 4px;
    width: 263px;
    /* margin-top: 80px; */
}

.log {
    display: flex;
    justify-content: space-between;
    gap: 173px;
}

h1 {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #FFFFFF;
}
</style>