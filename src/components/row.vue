<style lang="stylus">
@require '../stylus/mixins/grid'

.fk-row
  row-mixin()

</style>

<template functional>
  <div class="fk-row" :class="[data.staticClass, data.class, $options.getClasses(props)]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Row',
    props: {
      center: {
        type: Boolean,
        default: false
      }
    },
    getClasses(props) {
      return {
        'fk-row--center': !!props.center
      }
    }
  }
</script>
