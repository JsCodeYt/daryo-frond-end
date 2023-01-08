<template>
    <Navbar />
    <div class="single__container">
        <LastItem />
        <div class="single" v-if="post">
            <!-- <img src="https://daryo.uz/static/2022/12/medium-sorovnoma-1.jpg" alt=""> -->
            <img :src="PF + post.image + '/'" alt="">
            <div class="popular">
                <span class="material-symbols-outlined">
                    thumb_up
                </span>
                <span>112</span>
            </div>
            <div class="post__info">
                <h5>{{ post.title }}
                    <div class="icons">
                        <span class="material-symbols-outlined">
                            thumb_up
                        </span>
                        <span class="material-symbols-outlined">
                            chat
                        </span>
                    </div>
                </h5>
                <p>{{ post.desc }}</p>
            </div>
        </div>
        <div class="loading" v-else>Loading...</div>
    </div>
</template>
<script>
import Navbar from "../components/Navbar.vue"
import LastItem from "../components/LastItem.vue"
import axios from "../axios"
export default {
    data() {
        return {
            post: null,
            PF: "https://daryo-api.onrender.com/images"
        }
    },
    components: {
        Navbar,
        LastItem
    },
    created() {
        const getPost = async () => {
            const res = await axios.get(`/post/${this.$route.params.id}`)
            this.post = res.data
        }
        getPost()
    }
}
</script>
<style>
.single__container {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.single {
    flex: 9;
}

.last {
    flex: 4;
}

.popular {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0px 20px;
    font-size: 12px;
    cursor: pointer;
}

.post__info {
    font-size: 12px;
    margin: 20px 20px;
}

.post__info>h5 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.icons {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.icons span {
    cursor: pointer;
}
</style>