<style lang="stylus">
  @require '../stylus/mixins/dialogue.styl'

  .fk-dialogue
    dialogue-mixin()

</style>

<template>
  <Flex v-if="show" justify="center" align="center" :class="classObject" class="fk-dialogue">
    <section class="fk-dialogue__frame" v-click-outside="dismiss">
      <a v-if="!requireAction" @click="dismiss" class="fk-dialogue__close">
        <Icon icon="close" color="orange" />
      </a>
      <slot/>
    </section>
  </Flex>
</template>

<script>
  import clickOutside from '../directives/click-outside'

  export default {
    name: 'Dialogue',
    directives: {clickOutside},
    props: {
      show: {
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
