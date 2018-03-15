<style lang="stylus">
  .password-input
    &__img
      display: block
      position: absolute
      height: 30px
      width: 30px
      background: center center no-repeat
      cursor pointer
      background-image url('../assets/images/password-visible.png') 
    &__show-pass
      background-position: 8px -35px
    &__hide-pass
      background-position: 6px 17px
</style>

<template>
  <section class="password-input" @mouseover="show" @mouseout="passwordToggle = false" >
    <Input :type="inputType" :value="value" @input="onInput" placeholder="password" ref="input" block/>
    <div :class="['password-input__img', iconClass]" :style="iconStyle" v-show="passwordToggle" @click="toggle"></div>
  </section>
</template>

<script>
  export default {
    name: 'PasswordInput',
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        inputType: 'password',
        passwordToggle: true,
        iconStyle: null
      }
    },
    computed: {
      iconClass () {
        return this.inputType === 'password' ? 'password-input__show-pass' : 'password-input__hide-pass'
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.computePosition()
        window.addEventListener('resize', this.computePosition)
      })
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.computePosition)
    },
    methods: {
      onInput(val) {
        this.$emit('input', val)
      },
      toggle () {
        if (this.inputType === 'password') this.inputType = 'input'
        else this.inputType = 'password'
      },
      show () {
        this.passwordToggle = true
        this.computePosition()
      },
      computePosition () {
        if (!this.$refs.input ) return
        const input = this.$refs.input.$el
        const {height, width} = input.getBoundingClientRect()
        const left = input.offsetLeft + width - 35
        const top = height / 2 + input.offsetTop - 22
        this.iconStyle = {left: `${left}px`, top: `${top}px`}
      }
    }
  }
</script>