<style lang="stylus">
  @require '../stylus/mixins/number-input'

  .fk-number-input
    number-input()
</style>

<template>
  <div class="fk-number-input">
    <Button color="secondary" :disabled="value <= min" :class="buttonClass" @click="decrease">
      <Icon icon="minus" :size="size"/> 
    </Button>
    <Input type="number" :max="max" :min="min" :value="value" :class="inputClass" @input="handleChange" />
    <Button color="secondary" :disabled="value >= max" :class="buttonClass" @click="increase" >
      <Icon icon="plus" :size="size"/> 
    </Button>
  </div>
</template>
<script>
  export default {
    name: 'input-number',
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
    computed: {
      buttonClass() {
        return {
          'fk-number-input__button--small': this.size === 'small',
          'fk-number-input__button--big': this.size === 'big'
        }
      },
      inputClass() {
        return {
          'fk-number-input__input--small': this.size === 'small',
          'fk-number-input__input--big': this.size === 'big'
        } 
      }
    },
    methods: {
      decrease () {
        this.$emit('input', this.value-1)
      },
      increase () {
        this.$emit('input', this.value+1)
      },
      handleChange (value) {
        if(!value) return this.$emit('input', this.value)
        this.$emit('input', Math.max(Math.min(this.max, value), this.min))
      }
    }
  }
</script>