<style lang="stylus">
  @require '../stylus/mixins/select.styl'

  .fk-select
    select-mixin()

</style>

<template>
  <select class="fk-select" :class="classObject" @change="updateValue" @blur="validate">
    <option v-if="placeholder" value="" :selected="!value">{{placeholder}}</option>
    <option v-for="(option, $index) in options" :key="$index" :value="option.value" :selected="value == option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script>
import validator from '../mixins/validator'

export default {
  name: 'Select',
  mixins: [ validator() ],
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
      type: [String, Number],
      default: ''
    }
  },
  computed: {
    classObject() {
      return {
        'fk-select--block': !!this.block,
        'fk-select--error': this.invalid
      }
    }
  },
  data() {
    return {
      error: false
    }
  },
  methods: {
    updateValue(e) {
      const value = e.target.value
      this.$emit('input', value)
      this.touched = true
    }
  }
}
</script>
