<style lang="stylus">
  @require '../stylus/mixins/input-tooltip'
  .input-tooltip
    input-tooltip-mixin()

</style>

<template>
  <section class="input-tooltip" v-click-outside="hideToolTip">
    <slot></slot>
    <div v-show="show" :style="bubbleStyle" ref="bubble" class="input-tooltip__bubble" > 
        <b class="input-tooltip__title">{{title}}</b>
        <ul>
          <li v-for="condition, key in conditions" :class="invalidCondition[key]">{{condition}}</li>
        </ul>
        <p v-if="type === 'password'" class="input-tooltip__status" :class="statusClass">{{statusTxt[status]}}</p>
      </div>
  </section>
</template>

<script>
  import clickOutside from './clickOutside.directive'

  let updateStyleEventListener

  export default {
    name: 'InputTooltip',
    directives: {
      clickOutside
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      conditions: {
        type: Object,
        default: () => {}
      },
      statusTxt: {
        type: Object,
        default: () => {}
      },
    },
    computed: {
      type() {
        if (!this.$input) return ''
        return this.$input.$el && this.$input.$el.type.toLowerCase()
      },
      statusClass() {
        if (!this.type || this.type !== 'password') return ''
        return `input-tooltip__status--${this.status}`
      },
      status() {
        if (this.score >= 4) return 'success'
        if (this.score >= 2) return 'warning'
        return 'danger'
      }
    },
    data() {
      return {
        show: this.__test__ ? true : false,
        invalidCondition: {},
        score: 0,
        bubbleStyle: null,
        $input: null,
        inputType: ''
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.$input = this.findInput(this)
        this.inputType = this.$input.$el.type.toLowerCase()
        this.bindToInput()
      })
    },
    methods: {
      findInput (node) {
        const input = node.$children.find(({ _vnode }) => _vnode.tag === 'input')
        if(input) return input
        return node.$children.map(node => this.findInput(node))[0]
      },
      updateStatus() {
        const input = this.$input = this.findInput(this)
        if (!input) return
        const value = input.$el.value
        if (this.inputType === 'password') {
          this.invalidCondition['min'] = input.errors.lengthError === 'min' ? 'input-tooltip--invalid' : ''
          this.invalidCondition['max'] = input.errors.lengthError === 'max' ? 'input-tooltip--invalid' : ''
          this.getScore(value)
        } else {
          const { pattern } = input.validate(value) || {}
          this.invalidCondition['valid'] = !pattern ? 'input-tooltip--valid' : 'input-tooltip--invalid'
        }
      },
      bindToInput() {
        // if (!this.$input) 
        this.$input = this.findInput(this)
        this.$input.$el.addEventListener('click', this.showToolTip)
        this.$input.$el.addEventListener('input', this.updateStatus)
      },
      showToolTip(event) {
        if (this.show) return
        this.show = true
        this.updateStatus()
        this.updateStyle()
      },
      hideToolTip() {
        this.show = false
      },
      getScore(password) {
        let score = 0
        if (password)  {
          if (/\d/.test(password)) score++
          if (/[a-z]/.test(password)) score++
          if (/[A-Z]/.test(password)) score++
          if ((/[()\[\]{}?!$%&\/=*\+~,\.;:<>\-_#]/g).test(password)) score++
        }
        this.score = score
      },
      updateStyle() {
        this.$nextTick(() => {
          const bubble = this.$refs.bubble && this.$refs.bubble.getBoundingClientRect()
          const slot = this.$input && this.$input.$el
          const {height, width} = slot.getBoundingClientRect()
          if (!bubble || !slot) return
          this.bubbleStyle  = {
            top: `${(slot.offsetTop + height/2) - (bubble.height / 2)}px`,
            left: `${slot.offsetLeft + width}px`
          }
        })
      }
    }
  }
</script>