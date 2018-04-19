<style lang="stylus">
  @import '../stylus/_vars'
  .fk-information-accordion__content
    @media(max-width $bp-sm)
      color: #7a7a7a
      font-size: 20px
</style>

<template>
<component :is="windowWidth > breakPoint ? 'InformationBlock' : 'Accordion'" :placeholder="title" :title="title" class="fk-information-accordion">
  <div class="fk-information-accordion__content">
    <slot></slot>
  </div>
</component>
</template>

<script>
  let resizeListner
  export default {
    name: 'InformationAccordion',
    data () {
      return {
        windowWidth: window.innerWidth,
        breakPoint: 767
      }
    },
    mounted() {
      resizeListner = this.handleResize
      window.addEventListener('resize', resizeListner)
    },
    beforeDestory () {
      window.removeEventListener('resize', resizeListner)
    },
    methods: {
      handleResize() {
        this.windowWidth= window.innerWidth
      }
    },
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>