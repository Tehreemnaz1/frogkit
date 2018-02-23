<style lang="stylus">
  @require '../stylus/mixins/icon'

  .fk-icon
    icon-mixin()

</style>

<template >
  <component :is="icon" :class="['fk-icon', getClasses]"/>
  <!-- <b>*</b> -->
</template>

<script>
  import components from './icons'
  export default {
    name: 'Icon',
    components,
    props: {
      size: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
      }
    },
    computed: {
      getClasses() {
        const props = this
        return {
          [`fk-icon--${props.color}`]: !!props.color,
          [`fk-icon--${props.size}`]: !!props.size,
        }
      }
    }
  }
</script>
