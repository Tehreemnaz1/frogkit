<style lang="stylus">
  @import '../stylus/mixins/tick-text'
  .fk-tick-text
    tick-text-mixin()
</style>

<template>
<section :class="['fk-tick-text', getClasses]">
  <Flex align="top" class="fk-tick-text__container">
    <Icon class="fk-tick-text__icon" icon="checkmark" :color="color" />
    <Flex column>
      <component :is="bold ? 'b' : 'p'" class="fk-tick-text__placeholder" v-html="placeholder"></component>
      <slot></slot>
    </Flex>
  </Flex>
  
  </section>
</template>

<script>
  export default {
    name: 'TickText',
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
          [`fk-tick-text--${props.color}`]: !!props.color,
          ['fk-tick-text--bold']: !!props.bold,
        }
      }
    }
  }
</script>