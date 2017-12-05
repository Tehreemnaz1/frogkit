<style lang="stylus">
  @require '../stylus/mixins/checkbox.styl'

  .fk-checkbox
    checkbox-mixin()

</style>

<template>
  <label class="fk-checkbox" :class="classObject">
    <input type="checkbox" :name="name" :value="value" @change="updateValue" :checked="checked" :disabled="disabled">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
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
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObject() {
      return {
        'fk-checkbox--disabled': !!this.disabled
      }
    }
  },
  methods: {
    updateValue(e) {
      this.$emit('change', e.target.checked)
    }
  }

}
</script>
