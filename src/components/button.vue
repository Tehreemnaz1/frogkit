<style lang="stylus" scoped>
  @require '../stylus/mixins/button'

  .fk-btn
    button-mixin()

</style>

<template>
  <button class="fk-btn" :class="classObject" @click="clicked" >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'fk-button',
    props: {
      size: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
      },
      outline: {
        type: Boolean,
        default: false
      },
      block: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      clicked () {
        this.$emit('click')
      }
    },
    computed: {
      classObject() {
        return {
          'fk-btn--small': this.size == 'small',
          'fk-btn--big': this.size == 'big',
          'fk-btn--outline': !!this.outline,
          'fk-btn--block': !!this.block,
          'fk-btn--primary': this.color == 'primary',
          'fk-btn--secondary': this.color == 'secondary',
        }
      }
    }
  }
</script>
