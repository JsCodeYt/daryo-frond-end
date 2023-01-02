<template>
    <header id="header">
        <div class="last">
            <LastItem />
        </div>
        <div class="posts">
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
        </div>
    </header>
</template>
<script>
import LastItem from "./LastItem.vue"
import PostItem from "./Postitem.vue"
export default {
    components: {
        LastItem,
        PostItem,
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