<style lang="stylus" scoped>
  @require '../stylus/mixins/typography'

  .fk-txt
    txt-mixin()

</style>

<template>
  <div class="fk-txt" :class="classObject">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'FkText',
    props: {
      size: {
        type: String,
        default: ''
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
      classObject() {
        return {
          'fk-txt--xl': this.size == 'xl',
          'fk-txt--lg': this.size == 'lg',
          'fk-txt--md': this.size == 'md',
          'fk-txt--sm': this.size == 'sm',
          'fk-txt--xs': this.size == 'xs',
          'fk-txt--bold': this.weight == 'bold',
          'fk-txt--slim': this.weight == 'slim',
          'fk-txt--primary': this.color == 'primary',
          'fk-txt--light': this.color == 'light'
        }
      }
    }
  }
</script>
