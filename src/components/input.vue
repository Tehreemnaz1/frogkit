<style lang="stylus">
  @require '../stylus/mixins/input.styl'

  .fk-input
    input-mixin()

</style>

<template>
  <input :type="type" class="fk-input" :class="classObject" :value="value" @input="updateValue" @blur="validateInput"/>
</template>

<script>
  const regex = {
    text: /./,
    phone: /^[0-9 \\+\\-\\(\\)\\/]{3,32}$/,
    password: /^[\w ]{8,64}$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    // email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  }
  export default {
    name: 'Input',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      size: {
        type: String,
        default: ''
      },
      cutSide: {
        type: String,
        default: ''
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
          'fk-input--small': this.size == 'small',
          'fk-input--cut-left': this.cutSide == 'left',
          'fk-input--cut-right': this.cutSide == 'right',
          'fk-input--block': !!this.block,
          'fk-input--error': !!this.error
        }
      }
    },
    data() {
      return {
        inputValue: this.value,
        error: false,
        validationRegex: regex[this.type]
      }
    },
    methods: {
      updateValue(e) {
        this.inputValue = e.target.value
        this.$emit('input', this.inputValue)
        this.validateInput()
      },
      validateInput() {
        this.error = false

        if (this.required && !this.inputValue.length) {
          this.error = true
        }

        if (this.validationRegex && this.inputValue.length) {
          this.error = !this.validationRegex.test(this.inputValue)
        }

      }
    }
  }
</script>
