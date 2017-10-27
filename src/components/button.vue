<style lang="stylus" scoped>
@require '../stylus/mixins/button'

.fk-btn
  button-mixin()

</style>

<template>
  <component :is="elementTag" class="fk-btn" :class="classObject" @click="clicked" rel="noopener noreferrer">
    <slot></slot>
  </component>
</template>

<script>
  export default {
    name: 'Button',
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
      },
      link: {
        type: Boolean,
        default: false
      },
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
          'fk-btn--outline': !!this.outline,
          'fk-btn--primary': this.color == 'primary',
          'fk-btn--secondary': this.color == 'secondary',
        }
      },
      elementTag() {
        return this.link ? 'a' : 'button'
      }
    }
  }
</script>
