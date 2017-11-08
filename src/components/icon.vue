<style lang="stylus" scoped>
  @require '../stylus/mixins/icon'

  .fk-icon
    icon-mixin()

</style>

<template >
  <component :is="icon" :class="['fk-icon', getClasses]" tada="true"/>
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
        }
      }
    }
  }
</script>
