<style lang="stylus">
  @require '../stylus/mixins/dialogue.styl'

  .fk-dialogue
    dialogue-mixin()

</style>

<template>
  <transition appear enter-active-class="fk-dialogue__animation-in" leave-active-class="fk-dialogue__animation-out">
    <Flex v-if="show" justify="center" align="center" class="fk-dialogue" :class="classObject">
      <section class="fk-dialogue__frame" v-click-outside="dismiss">
        <a v-if="!requireAction" @click="dismiss" class="fk-dialogue__close">
          <Icon icon="close-light" color="orange" />
        </a>
        <slot/>
      </section>
    </Flex>
  </transition>
</template>

<script>
  import clickOutside from '../directives/click-outside'

  export default {
    name: 'Dialogue',
    directives: {clickOutside},
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      dark: {
        type: Boolean,
        default: false
      },
      requireAction: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: this.visible
      }
    },
    computed: {
      classObject() {
        return {
          'fk-dialogue--dark': !!this.dark
        }
      }
    },
    methods: {
      close() {
        this.show = false
        this.$emit('closed')
      },
      dismiss() {
        if (!this.requireAction) {
          this.close()
        }
      }
    }
  }
</script>
