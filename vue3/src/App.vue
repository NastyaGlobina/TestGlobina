<template>
  <HeaderSite />
  <router-view />
  <FooterSite />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderSite from './views/home/components/header-site.vue'
import FooterSite from './views/home/components/footer-site.vue'

export default defineComponent({
  name: 'App',
  components: { HeaderSite, FooterSite },
})
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  padding: 80px 0 220px 0;
  margin: 0;
  min-height: 100vh;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
