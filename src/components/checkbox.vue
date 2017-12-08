<style lang="stylus">
  @require '../stylus/mixins/checkbox.styl'

  .fk-checkbox
    checkbox-mixin()

</style>

<template>
  <label class="fk-checkbox" :class="classObject">
    <input type="checkbox" :name="name" :value="value" @change="updateValue" :checked="isChecked" :disabled="disabled">
    <slot></slot>
  </label>
</template>

<script>
import validator from './validator.mixin'

export default {
  name: 'Checkbox',
  mixins: [ validator ],
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: [Boolean, String],
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      default: null
    },
    trueValue: {
      default: true
    },
    falseValue: {
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
    },
    isChecked() {
      return this.checked === this.trueValue
      || this.value && this.checked === this.value
      || this.checked === true
    }
  },
  methods: {
    updateValue(e) {
      const checked = e.target.checked
      let value
      if (checked) {
        value = this.value || this.trueValue
      } else {
        value =  (this.value && typeof this.value === 'string') ? '' : this.falseValue
      }
      this.$emit('change', value)
    }
  }
}
</script>
