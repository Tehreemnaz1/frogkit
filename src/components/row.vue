<style lang="stylus" scoped>
@require '../stylus/mixins/grid'

.fk-row
  row-mixin()

</style>

<template functional>
  <div class="fk-row" :class="data.staticClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Row'
  }
</script>
