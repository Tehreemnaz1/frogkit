<style lang="stylus">
  @import '../stylus/mixins/dark-layer'
    .dark-layer
      dark-layer-mixin()
</style>

<template>
  <section v-if="show" class="dark-layer" @click="show = false">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'DarkLayer',
    data () {
      return {
        show: true
      }
    }
  }
</script>