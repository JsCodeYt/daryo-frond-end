<template>
    <div class="post" v-for="post in posts">
        <router-link class="link" :to="'/single/' + post._id">
            <div class="post__header">
                <img src="https://daryo.uz/static/2022/12/medium-sorovnoma-1.jpg" alt="">
                <div class="header__cat">
                    <span>|</span>
                    <span class="cat__name">{{ post.cat }}</span>
                </div>
                <h4 class="post__title">{{ post.title }}</h4>
            </div>
            <div class="post__date">
                <span>{{ new Date(post.createdAt).toDateString() }}</span>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    props: {
        posts: {
            type: Array,
            required: true,
        }
    },
    created() {
    }
}
</script>
<style>
.post {
    width: 400px;
    padding: 10px;
    transition: all 0.5s ease-in-out;
}

.post:hover {
    -webkit-box-shadow: 1px 1px 18px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 1px 1px 18px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 1px 1px 18px 0px rgba(34, 60, 80, 0.2);
}

.header__cat {
    display: flex;
    gap: 10px;
}

.cat__name {
    color: #b7b7b7;
    cursor: pointer;
}

.post__header img {
    width: 100%;
    height: 50%;
    object-fit: contain;
}

.post__header h4 {
    font-size: 12px;
}

.post__date span {
    color: #b7b7b7;
}

.link {
    text-decoration: none;
    color: #b7b7b7;
}
.post__title {
    color: #000;
}
</style>