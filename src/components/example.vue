<style lang="stylus" scoped>
@require '../stylus/_vars'

.btn
  background-color: orange

</style>

<template>
    <button class="btn" dark fab fixed bottom right @click="clicked" >
      <span>{{title}}</span>
    </button>
</template>

<script>
  export default {
    name: 'kit-example',
    props: {
      title: {
        type: String,
        default: 'tada'
      }
    },
    methods: {
      clicked () {
        this.$emit('click')
      }
    }
  }
</script>
