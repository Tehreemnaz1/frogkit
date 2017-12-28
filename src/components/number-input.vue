<style lang="stylus">
  @require '../stylus/mixins/number-input'

  .fk-number-input
    number-input()
</style>

<template>
  <div class="fk-number-input">
    <Button color="secondary" :disabled="val === min" :class="buttonClass" @click="decrease">
      <Icon icon="minus" :size="size"/> 
    </Button>
    <Input type="number" v-model="val" :class="inputClass" @input="handleChange"/>
    <Button color="secondary" :disabled="val === max" :class="buttonClass" @click="increase" >
      <Icon icon="plus" :size="size"/> 
    </Button>
  </div>
</template>
<script>
  export default {
    name: 'number-input',
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
      },
      options () {
        return [...Array(this.max - this.min + 1).keys()]
                  .map((el) => ({label: el + this.min, value: el + this.min}))
      }
    },
    data () {
      return {
        val: this.value
      }
    },
    methods: {
      decrease () {
        this.$emit('input', --this.val)
      },
      increase () {
        this.$emit('input', ++this.val)
      },
      handleChange() {
        if (!this.val) this.val = this.min
        // Assure input in range [min..max]
        this.val = Math.max(Math.min(this.val, this.max), this.min)
      }
    }
  }
</script>