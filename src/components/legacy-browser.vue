<style lang="stylus">
  @import '../stylus/mixins/legacy-browser'

  .fk-legacy-browser
    legacy-browser-mixin()
</style>

<template>
  <DarkLayer :show="show" @click="$emit('click')">
    <Flex @click.stop="() => {}" justify="space-around" align="center" column  class="fk-legacy-browser" >
      <div class="m-b-10">
        <p class="fk-legacy-browser__title" >{{title}}</p>
        <p>{{content | fromhtml}}</p>
      </div>
        <img class="m-b-10" src="../assets/images/chrome.svg" />
        <Button link color="secondary" target="_blank" href="https://www.google.com/chrome/browser/desktop/">{{linkLabel}}</Button>
      </Flex>
  </DarkLayer>
</template>

<script>
  import clickOutside from '../directives/click-outside'
  export default {
    name: 'LegacyBrowser',
    filters: {
      fromhtml(value = '') {
        return value.replace(/<br>/, '\n')
      }
    },
    directives: {clickOutside},
    props: {
      show: {
        type: Boolean,
        value: true
      },
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      linkLabel: {
        type: String,
        default: ''
      }
    }
  }
</script>
