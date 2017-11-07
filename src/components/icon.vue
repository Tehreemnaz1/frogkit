<style lang="stylus" scoped>
  @require '../stylus/mixins/icon'

  .fk-icon
    icon-mixin()

</style>

<template >
  <component :is="icon" class="fk-icon" />
</template>

<script>
  import './icons'
  export default {
    name: 'Icon',
    props: {
      size: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: 'like'
      }
    }
  }
</script>
