<template>
    <div class="register">
        <form id="form" class="register__form" @submit.prevent>
            <div class="error" v-if="errorMessage">
                <p>{{ errorMessage }}</p>
            </div>
            <h1>Register Daryo</h1>
            <input type="username" placeholder="username" v-model="post.username">
            <input type="password" placeholder="password" v-model="post.password">
            <button @click="register" :disabled="$store.state.auth.user.loading">{{
                $store.state.auth.user.loading ?
                    "Loading" : "Register"
            }}</button>
        </form>
    </div>
</template>
<script>
import { RouterLink } from "vue-router";
export default {
    data() {
        return {
            post: {
                username: "",
                password: ""
            },
            file: null,
            errorMessage: "",
            loading: false,
        }
    },
    methods: {
        register() {
            this.$store.dispatch("register", {
                username: this.post.username,
                password: this.post.password
            })
        },
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

.file__input {
    margin-top: 20px;
    display: flex;
    align-items: center;
    width: 350px;
    gap: 10px;
}

.error {
    font-size: 12px;
    color: red;
}
</style>