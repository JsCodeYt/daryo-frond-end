<template>
  <div class="app">
    <RouterView />
    <!-- <NewPost/> -->
  </div>
</template>
<script>
import { RouterView } from 'vue-router';
import NewPost from './components/NewPost.vue';
export default {
    created() {
    },
    components: { NewPost }
}
</script>
<style>
.app {
  padding: 0px 130px;
}
</style>