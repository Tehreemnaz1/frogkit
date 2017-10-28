<style lang="stylus" scoped>
@require '../stylus/mixins/grid'

.fk-grid
  grid-mixin()

</style>

<template>
  <div class="fk-grid">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Grid'
  }
</script>
