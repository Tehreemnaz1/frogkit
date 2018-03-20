<style lang="stylus">
  @import '../stylus/mixins/input-password'
  
  .fk-input-password
    input-password-mixin()

</style>

<template>
  <section class="fk-input-password" @mouseover="show" @mouseout="passwordToggle = false" >
    <Input :type="inputType" :value="value" @input="onInput" placeholder="password" ref="input" block/>
    <div :class="['fk-input-password__img', iconClass]" :style="iconStyle" v-show="passwordToggle" @click="toggle"></div>
  </section>
</template>

<script>
  let positionEventListner

  export default {
    name: 'InputPassword',
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        inputType: 'password',
        passwordToggle: false,
        iconStyle: null
      }
    },
    computed: {
      iconClass () {
        return this.inputType === 'password' ? 'fk-input-password__show-pass' : 'fk-input-password__hide-pass'
      }
    },
    mounted () {
      this.$nextTick(() => {
        positionEventListner = this.computePosition
        window.addEventListener('resize', positionEventListner)
      })
    },
    beforeDestroy() {
      window.removeEventListener('resize', positionEventListner)
    },
    methods: {
      onInput(val) {
        this.$emit('input', val)
      },
      toggle () {
        this.inputType = this.inputType === 'password' ? 'text' : 'password'
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