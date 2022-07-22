// import { createStore } from "vuex";
// import axios from "axios";

// export default createStore({
//   state: {
//     user: {
//       email: "",
//       password: "",
//     },
//     isLoggedin: false,
//   },
//   getters: {
//     getcurrentUser: (state) => state,
//     getisLoggedin: (state) => state.isLoggedin,
//   },
//   mutations: {
//     SET_isLoggedIn(state, payload) {
//       state.isLoggedin = payload;
//     },
//   },
//   actions: {
//     async signIn({ commit }, email, password) {
//       if (email !== "" && password !== "") {
//         const response = await axios.post(
//           "https://enyata-inventory.herokuapp.com/api/v1/auth/login",
//           {
//             email: email,
//             password: password,
//           }
//         );
//         // commit("", response.data);
//         email = "";
//         password = "";
//         console.log(response);
//         //   if (response.data.message === "Login successful") {
//         //     this.isLoggedin = !this.isLoggedin;
//         //     commit("SET_isLoggedIn", true);
//         //     mailerr.style.display = "none";
//         //     passerr.style.display = "none";
//         //   }
//         //   //  else if (response.AxiosError.data.message === 'Incorrect login details') {
//         //   //   wrong.style.display = "block"
//         //   //   mailerr.style.display = "none"
//         //   //   passerr.style.display = "none"
//         //   // }
//         // } else if (this.email === "" && this.password === "") {
//         //   mailerr.style.display = "block";
//         //   passerr.style.display = "block";
//         // } else if (this.email === "") {
//         //   mailerr.style.display = "block";
//         // } else if (this.password === "") {
//         //   passerr.style.display = "block";
//         // } else {
//         //   console.warn("be serious");
//       }
//     },
//   },
//   modules: {},
// });
