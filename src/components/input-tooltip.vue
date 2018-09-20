<style lang="stylus">
  @require '../stylus/mixins/input-tooltip'

  .fk-input-tooltip
    input-tooltip-mixin()
</style>

<template>
  <section class="fk-input-tooltip" v-click-outside="hideToolTip">
    <div @focusout="hideToolTip" @focusin="showToolTip" @input="updateStatus">
      <slot></slot>
    </div>
    <div v-show="show" :style="bubbleStyle" ref="bubble" class="fk-input-tooltip__bubble" > 
        <b class="fk-input-tooltip__title">{{title}}</b>
        <ul>
          <li v-for="condition, key in conditions" :class="{'fk-input-tooltip--invalid':invalidCondition[key], 'fk-input-tooltip--valid':!invalidCondition[key]}">{{condition}}</li>
        </ul>
        <p v-if="type === 'password'" class="fk-input-tooltip__status" :class="statusClass">{{statusTxt[status]}}</p>
      </div>
  </section>
</template>

<script>
  import clickOutside from '../directives/click-outside'

  export default {
    name: 'InputTooltip',
    directives: {
      clickOutside,
    },
    props: {
      title: {
        type: String,
        default: '',
      },
      conditions: {
        type: Object,
        default: () => {},
      },
      statusTxt: {
        type: Object,
        default: () => {},
      },
      inputType: {
        type: String,
        default: '',
      },
    },
    computed: {
      statusClass() {
        if (!this.type || this.type !== 'password') return ''
        return `fk-input-tooltip__status--${this.status}`
      },
    },
    data() {
      return {
        show: this.__test__ ? true : false,
        invalidCondition: {},
        score: 0,
        bubbleStyle: null,
        $input: null,
        type: '',
        status: null,
      }
    },
    mounted() {
      this.$input = this.findInput(this)
      this.type = this.inputType || this.$input.$el.type.toLowerCase()
      window.addEventListener('resize', this.updateStyle)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateStyle)
    },
    methods: {
      findInput(node) {
        const input = node.$children.find(({ _vnode }) => _vnode.tag === 'input')
        if (input) return input
        return node.$children.map(node => this.findInput(node))[0]
      },
      updateStatus() {
        const input = this.$input
        if (!input) return
        const value = input.$el.value
        this.invalidCondition = input.validate(value, this.type, true)
        this.invalidCondition['valid'] = this.invalidCondition.pattern

        this.status = input.getStatus(value)
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
      updateStyle() {
        this.$nextTick(() => {
          const bubble = this.$refs.bubble && this.$refs.bubble.getBoundingClientRect()
          const slot = this.$input && this.$input.$el
          const { height, width } = slot.getBoundingClientRect()
          if (!bubble || !slot) return
          if (window.innerWidth >= 768) {
            this.bubbleStyle = {
              top: `${slot.offsetTop + height / 2 - bubble.height / 2}px`,
              left: `${slot.offsetLeft + width}px`,
            }
          } else {
            this.bubbleStyle = {
              top: `${slot.offsetTop - bubble.height - 10}px`,
              left: `${slot.offsetLeft + width / 2 - 10 - bubble.width / 2}px`,
            }
          }
        })
      },
    },
  }
</script>