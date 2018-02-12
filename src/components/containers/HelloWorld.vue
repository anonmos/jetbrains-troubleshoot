<template>
  <div class="main">
    <div class="hello-container">
      Hello Jetbrains!
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'hello-world',
    data () {
      return {
        msg: 'This is a state item'
      }
    }
  })
</script>

<style lang="sass" scoped>
  @import '../../styles/hello-world.scss'
</style>
