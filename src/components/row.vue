<style lang="stylus" scoped>
@require '../stylus/mixins/grid'

.fk-row
  row-mixin()

</style>

<template functional>
  <div class="fk-row" :class="[data.staticClass, Object.keys(data.attrs)]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Row'
  }
</script>
