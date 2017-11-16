<style lang="stylus">
@require '../stylus/mixins/spinner'

.fk-spinner
  spinner-mixin()

</style>

<template functional>
  <!-- <div class="loader">
    <div class="circle"></div>
  </div> -->
  <div class="fk-spinner" :class="props.fullscreen ? 'fk-spinner--fullscreen' : ''"></div>
</template>

<script>
  export default {
    name: 'Spinner',
    props: {
      fullscreen: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
