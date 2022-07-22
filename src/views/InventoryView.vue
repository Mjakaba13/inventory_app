<template>
    <div class="whole">
        <userBoard></userBoard>
        <div class="right-side">
            <nav>
                <div class="user">AM</div>
                <h1>Akaba Malcolm</h1>
            </nav>
            <div class="main">
                <h2>In-stock</h2>
                <div class="tab-wrap">
                    <div class="top">
                        <input type="text" name="" id="search" placeholder="Search product by name">
                        <div class="top-right">
                            <button id="product">Add Product</button>
                            <img src="@/assets/Frame29.svg" alt="">
                        </div>
                    </div>
                    <table>
                        <tr class="header">
                            <th><input id="check" type="checkbox"></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Status</th>
                            <th>Category</th>
                        </tr>
                        <tr>
                            <td><input id="check" type="checkbox"></td>
                            <td>Milo sachet</td>
                            <td>36</td>
                            <td>2</td>
                            <td>
                                <div>In-stock</div>
                            </td>
                            <td>Beverage</td>
                        </tr>
                        <tr>
                            <td><input id="check" type="checkbox"></td>
                            <td>Ideal Milk - 160g</td>
                            <td>0</td>
                            <td>5.5</td>
                            <td>Out of stock</td>
                            <td>Beverage</td>
                        </tr>
                        <tr>
                            <td><input id="check" type="checkbox"></td>
                            <td>Kleesoft Washing Powder</td>
                            <td>3</td>
                            <td>2.5</td>
                            <td>Reorder level</td>
                            <td>Detergents</td>
                        </tr>
                    </table>
                    <div class="bottom">
                        <div class="egg">
                            <img src="@/assets/prev.svg" alt="">
                        </div>
                        <div class="bot">
                            <img src="@/assets/prev2.svg" alt="">
                            <h5>Prev</h5>
                        </div>
                        <div class="alone">1</div>
                        <div class="bot">
                            <h5>Next</h5>
                            <img src="@/assets/next1.svg" alt="">
                        </div>
                        <div class="egg">
                            <img src="@/assets/nxt.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import userBoard from '@/components/UserBoard.vue'

export default {
    name: 'Inventory',
    components: {
        userBoard
    }
}
</script>

<style scoped>
.whole {
    /* height: 100vh; */
    display: flex;
    width: 100%;
}

.right-side {
    /* width: 100%; */
    width: 77.8%;
    /* height: 100vh; */
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

h2 {
    height: 43px;
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 120%;
    letter-spacing: -0.04em;
    color: #1D2128;
    /* padding-top: 40px; */
    margin-top: 40px;
    padding-left: 42px;
    margin-bottom: 16px;
}

/* .main {
    background-color: rgb(89, 85, 85);

} */

.tab-wrap {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding: 48px 32px 0px 32px;
    gap: 8px;
    width: 91%;
    height: 644px;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 43px;
    margin-left: auto;
    margin-right: auto;
}

.top {
    display: flex;
    align-items: center;
    gap: 388px;
    justify-content: space-between;
}

.top-right {
    display: flex;
    align-items: center;
    gap: 8px;
}

#search {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 8px 20px;
    gap: 10px;
    width: 274px;
    border: none;
    height: 43px;
    background: #F4F4F4;
    border-radius: 8px;
}

#search::placeholder {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #A7AEBB;
}

button {
    padding: 8px 24px;
    width: 147px;
    height: 43px;
    background: #2656D1;
    border-radius: 8px;
    border: none;
}

td,
th {
    text-align: left;
}

/* .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 24px;
    gap: 114px;

    width: 560px;
    height: 56px;

    background: #F9F9F9;
} */
.bottom {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 16px 0px 0px;
    gap: 10px;

    /* width: 960px; */
    height: 48px;

}

.bot {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    gap: 10px;
    width: 88px;
    height: 32px;
    background: #F1F1F1;
    border-radius: 8px;
}

.egg {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    gap: 10px;

    width: 46px;
    height: 32px;

    background: #F1F1F1;
    border-radius: 8px;
}

.alone {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;
    width: 44px;
    height: 32px;
    border: 1px solid #9599A0;
    border-radius: 8px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #1D2128;
}

h5 {
    height: 24px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #000000;
}
</style>