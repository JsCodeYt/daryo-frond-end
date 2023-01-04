<template>
    <div class="register">
        <RouterLink to="/register">
            <button class="login">Register</button>
        </RouterLink>
        <form id="form" class="register__form" @submit.prevent>
            <div class="error" v-if="errorMessage">
                <p>{{ errorMessage }}</p>
            </div>
            <h1>Ro'yhatdan o'ting</h1>
            <input type="username" placeholder="username" @input="change_username">
            <input type="password" placeholder="password" @input="change_password">
            <button @click="login">Login</button>
        </form>
    </div>
</template>
<script>
import { RouterLink } from "vue-router";
import axios from "../axios"
export default {
    data() {
        return {
            post: {
                username: "",
                password: ""
            },
            errorMessage: ""
        }
    },
    methods: {
        change_username(event) {
            this.post.username = event.target.value
        },
        change_password(event) {
            this.post.password = event.target.value
        },
        async login() {
            this.$store.dispatch("login")
        }
    }
}
</script>
<style scoped>
.register {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
}

.register__form {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 50px;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;
}

.register__form:hover {
    -webkit-box-shadow: 10px -2px 44px 13px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 10px -2px 44px 13px rgba(34, 60, 80, 0.2);
    box-shadow: 10px -2px 44px 13px rgba(34, 60, 80, 0.2);
}

.register__form input {
    width: 340px;
    height: 40px;
    padding: 0px 5px;
    font-size: 14px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #fff;
}

.register__form input:focus {
    border: 2px solid #a2d2ff;
}

button {
    padding: 10px 30px;
    font-size: 20px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #bde0fe;
    transition: 0.5s ease-in-out;
}

button:hover {
    background-color: #bde0fe;
}

button.login {
    position: absolute;
    top: 10px;
    right: 50px;
}
</style>