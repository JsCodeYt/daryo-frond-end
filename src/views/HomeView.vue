<template>
  <div>
    <Navbar />
    <Header />
  </div>
</template>
<script>
import NavbarVue from '../components/Navbar.vue';
import Header from "../components/Header.vue"
export default {
  components: {
    Navbar: NavbarVue,
    Header,
  }
}
</script>
<style>
  
</style>