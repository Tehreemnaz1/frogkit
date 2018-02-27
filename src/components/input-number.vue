<style lang="stylus">
  @require '../stylus/mixins/number-input'

  .fk-number-input
    number-input()
</style>

<template>
  <Flex class="fk-number-input">
    <Button color="secondary" :disabled="value <= min" :class="buttonClass" @click="decrease">
      <Icon icon="minus" :size="size"/> 
    </Button>
    <!-- -->
    <Input type="number" :value="value" :class="inputClass" @input="handleChange" />
    <!-- -->
    <Button color="secondary" :disabled="value >= max" :class="buttonClass" @click="increase" >
      <Icon icon="plus" :size="size"/> 
    </Button>
  </Flex>
</template>

<script>
  export default {
    name: 'Input-Number',
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
        let num = Number(value) || 0
        this.$emit('input', num)
        num =  Math.max(Math.min(this.max, num), this.min)
        this.$nextTick(() => {
          this.$emit('input', num)
        })
      }
    }
  }
</script>