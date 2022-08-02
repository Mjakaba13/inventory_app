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
                            <button id="product" @click="addProd">Add Product</button>
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
                        <tr v-for="product in AllProducts" :key="product">
                            <td><input id="check" type="checkbox"></td>
                            <td>{{ product.name }}</td>
                            <td>{{ product.quantity }}</td>
                            <td>{{ product.unitPrice }}</td>
                            <td>
                                <div>{{ product.productStatus }}</div>
                            </td>
                            <td>{{ product.category }}</td>
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
        <form action="#" :style="[toggle ? { display: 'none' } : { display: 'block' }]">
            <input type="text" placeholder="Product name...." v-model="productName">
            <input type="text" placeholder="quantity...." v-model="quantity">
            <input type="text" placeholder="unit price...." v-model="unitPrice">
            <input type="text" placeholder="Status...." v-model="status">
            <input type="text" placeholder="Category...." v-model="category">
            <button id="soso" @click="createProduct">SUBMIT</button>
        </form>
    </div>
</template>

<script>
import userBoard from '@/components/UserBoard.vue'
import axios from "axios"

export default {
    name: 'Inventory',
    components: {
        userBoard
    },
    data() {
        return {
            productName: "",
            quantity: "",
            unitPrice: "",
            status: "",
            category: "",
            AllProducts: null,
            toggle: true
        }
    },
    async created() {
        await this.products()
    },
    methods: {
        addProd() {
            this.toggle = !this.toggle
        },
        async createProduct() {
            const id = localStorage.getItem("id")
            const response = await axios.post("http://localhost:8081/api/products/add", {
                "id": id,
                "name": this.productName,
                "quantity": this.quantity,
                "unitPrice": this.unitPrice,
                "productStatus": this.status,
                "category": this.category
            })
            console.log(response)
        },
        async products() {
            const id = localStorage.getItem("id")
            const response = await axios.post("http://localhost:8081/api/products", {
                "id": id
            })

            console.log(response)
            this.AllProducts = response.data.data
            console.log(this.AllProducts)
        }
    },
    computed: {
    }

}
</script>

<style scoped>
.whole {
    height: 100vh;
    display: flex;
    width: 100%;
    position: relative;
}

.right-side {
    /* width: 100%; */
    width: 77.8%;
    height: 100vh;
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


.tab-wrap {
    /* position: relative; */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding: 48px 32px 0px 32px;
    gap: 8px;
    width: 91%;
    /* height: 644px; */
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

/* .main {
    position: relative;
} */

form {
    position: absolute;
    top: 40%;
    left: 50%;
}

form input {
    display: block;
    padding: 10px;
    width: 200%;
    margin-top: 5%;
    border-radius: 8px;
    border: none;
    box-shadow: 5px 5px 5px 5px #A7AEBB;
    outline: none;

}

#soso {
    margin-top: 10px;
}
</style>