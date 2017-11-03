<style lang="stylus" scoped>
  @require '../stylus/mixins/select.styl'

  .fk-select
    select-mixin()

</style>

<template>
  <select class="fk-select" :class="classObject" @change="updateValue" @blur="validate">
    <option value="" :selected="!inputValue">{{placeholder}}</option>
    <option v-for="option in options" :key="option.value" :value="option.value" :selected="inputValue == option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'Select',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => [] // https://stackoverflow.com/questions/41553596/vue-2-how-to-set-deafult-type-of-array-in-props
    },
    block: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    classObject() {
      return {
        'fk-select--block': !!this.block,
        'fk-select--error': !!this.error
      }
    }
  },
  data() {
    return {
      inputValue: this.value,
      error: false
    }
  },
  methods: {
    updateValue(e) {
      this.inputValue = e.target.value
      this.$emit('input', this.inputValue)
      this.validate()
    },
    validate() {
      this.error = false
      if (this.required && !this.inputValue.length) {
        this.error = true
      }
    }
  }
}
</script>
