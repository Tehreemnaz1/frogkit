<style lang="stylus" scoped>
  @require '../stylus/mixins/title'

  .fk-title
    title-mixin()

</style>

<template>
  <h1 class="fk-title" :class="getClasses" :style="getStyles">
    <slot></slot>
  </h1>
</template>

<script>
  export default {
    name: 'Title',
    props: {
      size: {
        type: [String, Number],
        default: 'md'
      },
      color: {
        type: String,
        default: ''
      },
      weight: {
        type: String,
        default: ''
      }
    },
    computed: {
      getClasses() {
        return {
          'fk-title--xl': this.size == 'xl',
          'fk-title--lg': this.size == 'lg',
          'fk-title--md': this.size == 'md',
          'fk-title--sm': this.size == 'sm',
          'fk-title--xs': this.size == 'xs',
          'fk-title--weight-700': this.weight == 'weight-700',
          'fk-title--weight-300': this.weight == 'weight-300',
          'fk-title--primary': this.color == 'primary',
          'fk-title--light': this.color == 'light'
        }
      },
      getStyles() {
        return {
          fontSize: typeof(this.size) === 'number' ? `${this.size}rem`: this.size
        }
      }
    }
  }
</script>
