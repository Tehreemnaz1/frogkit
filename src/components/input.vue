<style lang="stylus" scoped>
  @require '../stylus/mixins/input.styl'

  .fk-input
    input-mixin()

</style>

<template>
  <input class="fk-input" :class="classObject" />
</template>

<script>
  export default {
    name: 'fk-input',
    props: {
      size: {
        type: String,
        default: ''
      },
      inputType: {
        type: String,
        default: 'text'
      },
      cutSide: {
        type: String,
        default: ''
      },
      block: {
        type: Boolean,
        default: false
      },
      error: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classObject() {
        return {
          'fk-input--small': this.size == 'small',
          'fk-input--cut-left': this.cutSide == 'left',
          'fk-input--cut-right': this.cutSide == 'right',
          'fk-input--block': !!this.block,
          'fk-input--error': !!this.error
        }
      }
    }
  }

</script>
