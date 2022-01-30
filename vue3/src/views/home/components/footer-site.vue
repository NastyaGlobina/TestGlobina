<template>
  <footer class="footer">
    <b-container class="text-left">
      <b-row>
        <b-col sm="6">
          <h5 class="title">Содержимое Футера</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minus, dignissimos facilis
            at consequuntur repellat? At in odit architecto laudantium culpa fugit, exercitationem
            commodi repellendus sequi? Vel quod iure velit.
          </p>
        </b-col>
        <b-col sm="6">
          <h5 class="title">Ссылки</h5>
          <ul>
            <li class="list-unstyled"><a href="#!">Ссылка 1</a></li>
            <li class="list-unstyled"><a href="#!">Ссылка 2</a></li>
            <li class="list-unstyled"><a href="#!">Ссылка 3</a></li>
            <li class="list-unstyled"><a href="#!">Ссылка 4</a></li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
    <div class="footer-copyright text-center">
      <b-container fluid> &copy; 2022 Tecт</b-container>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterSite',
})
</script>
<style lang="scss">
.footer {
  background: rgb(47, 197, 110);
  position: absolute;
  bottom: 0;
  left: 320px;
  right: 0;
  width: calc(100% - 320px);
  height: 220px;
  .container {
    min-width: 1400px;
    padding-top: 40px;
  }
}
</style>
