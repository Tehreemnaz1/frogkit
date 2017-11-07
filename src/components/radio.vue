<style lang="stylus" scoped>
  @require '../stylus/mixins/radio.styl'

  .fk-radio
    radio-mixin()

</style>

<template>
  <label class="fk-radio" :class="classObject">
    <input type="radio" :name="name" :value="inputValue" v-model="updateValue" :disabled="disabled">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'Radio',
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    inputValue: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObject() {
      return {
        'fk-radio--disabled': !!this.disabled
      }
    },
    updateValue: {
      get: function() {
        return this.value
      },
      set: function() {
        this.$emit('change', this.inputValue)
      }
    }
  }
}
</script>
