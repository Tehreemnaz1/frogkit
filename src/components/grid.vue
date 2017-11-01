<style lang="stylus" scoped>
  @require '../stylus/mixins/grid'

  .fk-grid
    grid-mixin()

</style>

<template functional>
  <div class="fk-grid" :class="props.fluid ? 'fk-grid--fluid' : ''">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Grid',
    props: {
      fluid: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
