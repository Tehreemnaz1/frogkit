<style lang="stylus">
  @import '../stylus/mixins/dark-layer'
    .fk-dark-layer
      dark-layer-mixin()
</style>

<template>
  <section v-if="show" class="fk-dark-layer" @click="$emit('click')">
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