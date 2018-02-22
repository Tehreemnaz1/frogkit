<style lang="stylus">
  @import '../stylus/mixins/dark-layer'
    .dark-layer
      dark-layer-mixin()
</style>

<template>
  <section v-if="show" class="dark-layer" @click="show = false">
    <Flex column align="center" justify="center" grow>
      <slot></slot>
    </Flex>
  </section>
</template>

<script>
  export default {
    name: 'DarkLayer',
    props: {
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>