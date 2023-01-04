<template>
    <div class="register">
        <RouterLink to="/login">
            <button class="login">Login</button>
        </RouterLink>
        <form id="form" class="register__form" @submit.prevent>
            <div class="error" v-if="errorMessage">
                <p>{{ errorMessage }}</p>
            </div>
            <h1>Ro'yhatdan o'ting</h1>
            <input type="username" placeholder="username" @input="change_username">
            <input type="password" placeholder="password" @input="change_password">
            <div class="file__input">
                <label for="file__input">
                    <span class="material-symbols-outlined">
                        photo_library
                    </span>
                </label>
                <span>Rasm yuklang !</span>
                <input @input="change_file" type="file" id="file__input" style="display: none;">
            </div>
            <button @click="register">Register</button>
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
            file: null,
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
        register() {
            this.$store.dispatch("register", {
                username: this.post.username,
                password: this.post.password
            })
        },
        async change_file(event) {
            this.file = event.target.files[0]
            console.log(this.file)
            if (this.file && this.file.size <= 3000) {
                this.errorMessage = ""
                const data = new FormData()
                const filename = Date.now() + this.file.name
                data.append("name", filename)
                data.append("file", this.file)
                try {
                    const res = await axios.post("/upload", { data })
                    console.log(res.data)
                    this.image = filename
                } catch (error) {
                    this.errorMessage = error.message
                    console.log(error.message)
                }
            } else this.errorMessage = "Iltimos hajmi 3kb dan oshmagan rasm yulang !"
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