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
    name: 'fk-text',
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
          'fk-txt--size-50': this.size == 'size-50',
          'fk-txt--size-38': this.size == 'size-38',
          'fk-txt--size-30': this.size == 'size-30',
          'fk-txt--size-25': this.size == 'size-25',
          'fk-txt--size-15': this.size == 'size-15',
          'fk-txt--weight-700': this.weight == 'weight-700',
          'fk-txt--weight-300': this.weight == 'weight-300',
          'fk-txt--primary': this.color == 'primary',
          'fk-txt--light': this.color == 'light'
        }
      }
    }
  }
</script>
