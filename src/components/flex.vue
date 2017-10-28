<style lang="stylus" scoped>
  @require '../stylus/mixins/flex'

  .fk-flex
    flex-mixin()

</style>

<template functional>
  <div class="fk-flex" :class="[data.staticClass, $options.classObject(props)]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Flex',
    props: {
      column: {
        type: Boolean,
        default: false
      },
      align: {
        type: String,
        default: 'start'
      },
      justify: {
        type: String,
        default: 'start'
      }
    },
    classObject(props) {
      return {
        'fk-flex--column': props.column,

        'fk-flex--justify-center': props.justify == 'center',
        'fk-flex--justify-end': props.justify == 'end',
        'fk-flex--justify-space-around': props.justify == 'space-around',
        'fk-flex--justify-space-between': props.justify == 'space-between',

        'fk-flex--align-center': props.align == 'center',
        'fk-flex--align-end': props.align == 'end',
        'fk-flex--align-stretch': props.align == 'stretch',
        // 'fk-flex--align-space-around': props.align == 'space-around',
        // 'fk-flex--align-space-between': props.align == 'space-between',
      }
    }
  }
</script>
