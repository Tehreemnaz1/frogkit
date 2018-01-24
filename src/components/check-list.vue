<style lang="stylus">
  @import '../stylus/mixins/check-list'
  .fk-check-list
    check-list-mixin()
</style>

<template>
<section :class="['fk-check-list', getClasses]">
  <Flex align="top">
    <Icon class="fk-check-list__icon" icon="checkmark" :color="color" />
    <Flex column>
      <component :is="bold ? 'b' : 'p'" class="fk-check-list__placeholder"> {{ placeholder }} </component>
      <slot></slot>
    </Flex>
  </Flex>
  
  </section>
</template>

<script>
  export default {
    name: 'CheckList',
    props: {
      placeholder: {
         type: String,
         required: true
      },
      color: {
        type: String,
        default: 'orange'
      },
      bold: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      getClasses() {
        const props = this
        return {
          [`fk-check-list--${props.color}`]: !!props.color,
          ['fk-check-list--bold']: !!props.bold,
        }
      }
    }
  }
</script>