<style lang="stylus" scoped>
@require '../stylus/mixins/spinner'

spinner-mixin()

</style>

<template functional>
  <div class="loader">
    <div class="circle"></div>
  </div>
</template>

<script>
  export default {
    name: 'Spinner'
  }
</script>
