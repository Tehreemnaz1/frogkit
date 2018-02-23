<style lang="stylus">
  @require '../stylus/mixins/radio.styl'

  .fk-radio
    radio-mixin()

</style>

<template>
  <label class="fk-radio" :class="classObject">
    <input type="radio" :name="name" :value="value" @change="updateValue" :checked="value == checked" :disabled="disabled">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'Radio',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      required: true
    },
    checked: {
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
    }
  },
  methods: {
    updateValue(e) {
      this.$emit('change', e.target.value)
    }
  }

}
</script>
