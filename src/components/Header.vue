<template>
    <header id="header">
        <div class="last">
            <LastItem />
        </div>
        <div class="posts">
            <h1 v-if="!posts">Loading...</h1>
            <PostItem :posts="posts" />
        </div>
    </header>
</template>
<script>
import LastItem from "./LastItem.vue"
import PostItem from "./Postitem.vue"
import axios from "../axios"
export default {
    data() {
        return {
            posts: null
        }
    },
    components: {
        LastItem,
        PostItem,
    },
    created() {
        const posts = () => {
            setTimeout(async () => {
                const res = await axios.get("/post")
                this.posts = res.data
            }, 200)
        }
        posts()
    }
}
</script>
<style scoped>
#header {
    display: flex;
}

.last {
    flex: 4;
    position: sticky;
    top: 0;
}

.posts {
    flex: 10;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
}
</style>