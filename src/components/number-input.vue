<style lang="stylus">
  @require '../stylus/mixins/number-input'

  .fk-number-input
    number-input()
</style>

<template>
  <div class="fk-number-input">
    <div v-if="isMobile">
      <Button color="secondary" :disabled="val === min" :class="buttonClass" @click="decrease">
        <Icon icon="minus" :size="size"/> 
      </Button>
      <input type='number' align="middle" v-model="val" :class="inputClass" @change="handleChange"/>
      <Button color="secondary" :disabled="val === max" :class="buttonClass" @click="increase" >
        <Icon icon="plus" :size="size"/> 
      </Button>
    </div>
    <div v-else>
      <Select :options="options" v-model="strVal" :class="selectClass" />
    </div>
  </div>
</template>
<script>
  import Button from '@/components/button'
  import Icon from '@/components/icon'
  import Select from '@/components/select'
  export default {
    name: 'number-input',
    components: {Button, Icon, Select},
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
      },
      isMobile: {
        type: Boolean,
        default: true
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
        return [...Array(this.max - this.min + 1).keys()].map((el) => ({label: el + this.min, value: el + this.min}))
      },
      selectClass() {
        return {
          'fk-number-input__select--small': this.size === 'small',
          'fk-number-input__select--big': this.size === 'big'
        } 
      }
    },
    data () {
      return {
        val: this.value,
        strVal: this.value.toString()
      }
    },
    methods: {
      decrease () {
        console.log(this.val)
        this.$emit('input', Math.max(this.min, this.val--))
      },
      increase () {
        this.$emit('input', Math.min(this.max, this.val++))
      },
      handleChange() {
        if (!this.val) this.val = this.min
        // Assure input in range [min..max]
        this.val = this.val < this.min ? this.min : (this.val > this.max ? this.max : this.val)
      }
    }
  }
</script>