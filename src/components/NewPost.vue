<template>
    <div class="new__container">
        <form class="container__form" @submit.prevent>
            <div class="file__input">
                <label for="file__input">
                    <span class="material-symbols-outlined icon">
                        photo_camera
                    </span>
                    <span>Upload a preview for the post</span>
                </label>
                <input @input="change_file" type="file" id="file__input" style="display: none;">
            </div>
            <input v-model="newPost.title" type="title" placeholder="title">
            <input v-model="newPost.desc" type="description" placeholder="description">
            <button @click="publish">Publish</button>
        </form>
    </div>
</template>
<script>
import axios from "../axios"
export default {
    data() {
        return {
            newPost: {
                title: "",
                desc: "",
            },
            file: null
        }
    },
    methods: {
        async change_file(event) {
            this.file = event.target.files[0]
            if (this.file) {
                const data = new FormData()
                const filename = Date.now() + this.file.name
                data.append("file", this.file)
                data.append("name", filename)
                try {
                    const res = await axios.post("/upload", { data })
                    console.log(res.data)
                    this.newPost.image = filename
                } catch (error) {
                    alert(error + "chage error")
                }
            }
        },
        async publish() {
            const res = await axios.post("/post", {
                ...this.newPost
            })
            console.log(res.data)
        }
    }

}
</script>
<style scoped>
.new__container {
    background-color: #fee440;
    height: 100vh;
    position: fixed;
    opacity: 0.8;
    top: 0px;
    width: 80%;
    margin: auto;
    z-index: 1000;
}

.container__form {
    height: 100%;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.file__input {
    padding: 50px;
}

.file__input label {
    display: flex;
    align-items: center;

}

.icon {
    font-size: 100px;
}

input {
    width: 300px;
    border-radius: 10px;
    padding: 10px;
    outline: none;
}

button {
    padding: 10px 30px;
    border-radius: 10px;
}
</style>