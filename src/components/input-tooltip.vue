<style lang="stylus">
  @require '../stylus/mixins/input-tooltip'
  .input-tooltip
    input-tooltip-mixin()

</style>

<template>
  <section class="input-tooltip">
    <slot></slot>
    <div v-if="show" class="input-tooltip__info-bubble" v-click-outside="hideToolTip"> 
      <div class="input-tooltip__content">
        <div class="input-tooltip__content__title">{{title}}</div>
        <ul>
          <li v-for="condition, key in conditions" :class="invalidCondition[key]">{{condition}}</li>
        </ul>
        <div v-if="type === 'password'" :class="statusClass">{{statusTxt}}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import clickOutside from './clickOutside.directive'
  export default {
    name: 'InputTooltip',
    directives: {clickOutside},
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
        type: String,
        default: ''
      },
    },
    computed: {
      type () {
        const input = this.$el && this.$el.querySelector('input')
        if (!input) return ''
        return input.type.toLowerCase().trim()
      },
      statusClass () {
        if (!this.type || this.type !== 'password') return ''
       return 'input-tooltip__content__status--'.concat(this.status)
      }
    },
    data () {
      return {
        show: this.__test__ ? true : false,
        invalidCondition: {},
        status: 'danger'
      }
    },
    mounted () {
      this.bindToInput()
    },
    methods: {
      updateStatus (input) {
        if (!input) input = this.$children.find(({_vnode}) => _vnode.tag === 'input')
        if (!input) return
        const value = input.$el.value
        if (input.$el.type.toLowerCase() === 'password') {
            this.invalidCondition['min'] =  value.length < 6 ? 'input-tooltip__content--invalid' : ''
            this.invalidCondition['max'] = value.length > 64 ? 'input-tooltip__content--invalid' : ''
            const score = this.getScore(value)
            if (score >= 2) this.status = 'warning'
            else this.status = 'danger'
            if (score >= 4) this.status = 'success'
            this.$forceUpdate()
        }
        else {
          // force input to run validation
          const {pattern} = input.validate(value) || {}
          this.invalidCondition['valid'] = !pattern ? 'input-tooltip__content--valid' : 'input-tooltip__content--invalid'
          this.$forceUpdate()
        }
      },
      bindToInput  () {
        const input = this.$children.find(({_vnode}) => _vnode.tag === 'input')
        if (!input) return
        input.$el.addEventListener('click', this.showToolTip)
        input.$el.addEventListener('input', () => {
          this.updateStatus(input)
        })
      },
      showToolTip (event) {
        this.show = true
        this.updateStatus()
        event.stopPropagation()
      },
      hideToolTip () {
        // this.show = false
      },
      getScore(password) {
        let score = 0 
        if (!password) { return score }
        if (/\d/.test(password)) { score++ }
        if (/[a-z]/.test(password)) { score++ }
        if (/[A-Z]/.test(password)) { score++ }
        if ((/[()\[\]{}?!$%&\/=*\+~,\.;:<>\-_#]/g).test(password)) { score++ }
        return score
      }
    }
  }
</script>