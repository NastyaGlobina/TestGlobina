<template>
  <div class="about">
    <h1>About Page</h1>
    <b-container>
      <b-list-group>
        <b-list-group-item>NAME: Nastya GLobina</b-list-group-item>
        <b-list-group-item>AGE: 24</b-list-group-item>
        <b-list-group-item
          >SKILLS: HTML5, CSS3, JavaScript, Vue.js, Linux, Bootstrap, Git</b-list-group-item
        >
      </b-list-group>
    </b-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutPage',
})
</script>

<style lang="scss">
.container-sm,
.container {
  max-width: 540px;
}
.list-group {
  text-align: start;
}
</style>
