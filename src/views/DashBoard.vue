<template>
    <div class="whole">
        <userBoard></userBoard>
        <div class="right-side">
            <nav>
                <div class="user">AM</div>
                <h1>Akaba Malcolm</h1>
            </nav>
            <div class="overview">
                <h2>Overview</h2>
                <div class="cards">
                    <div class="card">
                        <p>Products Types</p>
                        <h3>24</h3>
                    </div>
                    <div class="card">
                        <p>Categories</p>
                        <h3>3</h3>
                    </div>
                    <div class="card">
                        <p>Sales - July</p>
                        <h3>¢2,400</h3>
                    </div>
                    <div class="card">
                        <p>Inventory Value</p>
                        <h3>¢12,620</h3>
                    </div>
                </div>
            </div>
            <h4>Recently added</h4>
        </div>
    </div>
</template>

<script>
import userBoard from '@/components/UserBoard.vue'
export default {
    name: 'Dashboard',
    components: {
        userBoard
    }
}
</script>

<style scoped>
.whole {
    /* height: 100vh; */
    display: flex;
    
}

.right-side {
    /* width: 100%; */
    width: 1120px;
    /* height: 100vh; */
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

.card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 40px 16px 32px;
    gap: 6px;
    /* width: 100%; */
    width: 224px;
    height: 99px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    order: 2;
    /* align-self: stretch;
    flex-grow: 1; */
}

.cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 100%;
    /* width: 1024px; */
    height: 99px;
}

p {
    height: 19px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: #595F69;
}

h3 {
    height: 34px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 120%;
    color: #1D2128;
}

h2 {
    height: 54px;
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 150%;
    letter-spacing: -0.04em;
    color: #1D2128;
}

.overview {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 32px 0 89px 48px;
}

h4 {
    height: 27px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #000000;
    padding-left: 48px;
}
</style>