<style lang="stylus" scoped>
  @require '../stylus/mixins/grid'

  .fk-col
    col-mixin()


</style>

<template functional>
  <div class="fk-col" :class="[data.staticClass, data.class, Object.keys(data.attrs || {})]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Col'
  }
</script>
