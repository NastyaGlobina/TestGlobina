<template>
  <header class="site-header">
    <div id="nav"><router-link to="/">ГЛАВНАЯ СТРАНИЦА</router-link></div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderSite',
  props: {
    msg: { type: String, default: 'Welcome!' },
  },
})
</script>

<style lang="scss">
.site-header {
  position: absolute;
  top: 0;
  left: 320px;
  right: 0;
  width: calc(100% - 320px);
  height: 80px;
  background-color: rgb(241, 239, 239);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  a {
    color: rgb(47, 197, 110) !important;
  }
}
</style>
