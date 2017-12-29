<style lang="stylus">
  @require '../stylus/mixins/responsive-input-number'

  .fk-responsive-input
    responsive-input()
</style>

<template>
  <section class="fk-responsive-input">
    <Input-Number class="fk-responsive-input__input" :min="min" :max="max" :size="size" :value="value" @input="handleInput"/>
    <Select :class="selectClass" :options="options" :value="value" @input="handleInput" />
  </section>
</template>

<script>
  export default {
    name: 'Responsive-Input-Number',
    computed: {
      options () {
        const length = this.max - this.min + 1
        return Array.from({length}).map((_, i) => ({label: this.min + i, value: this.min + i}))
      },
      selectClass () {
        return {
          'fk-responsive-input__select--small': this.size === 'small',
          'fk-responsive-input__select--big': this.size === 'big'
        }
      }
    },
    props: {
      min: {
        type: Number,
        default: 1
      },
      max: {
        type: Number,
        default: 3
      },
      value: {
        type: Number,
        default: 1
      },
      size: {
        type: String,
        default: 'small'
      }
    },
    methods: {
      handleInput (value) {
        value = Number(value)
        this.$emit('input', Math.max(Math.min(this.max, value), this.min))
      }
    }
  }
</script>