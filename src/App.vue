<template>
  <div class="app">
    <RouterView />
  </div>
</template>
<script>
import { RouterView } from 'vue-router';
import axios from "./axios"
export default {
  created() {
  }
}
</script>
<style>
.app {
  padding: 0px 130px;
}
</style>