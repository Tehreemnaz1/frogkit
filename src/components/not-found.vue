<style lang="stylus">
  .fk-not-found
    background-color #fff
    height 500px
    width 800px
    border-radius 8px
    & &__exclamation
      width 95px
      height @width
    & &__content
      font-size 2.2rem
      color: #444
      text-align: center
    & &__button
      width 300px
</style>

<template>
  <Flex class="fk-not-found" align="center" justify="center" column>
    <Icon class="fk-not-found__exclamation m-b-30" icon="exclamation-circle" color="orange" />
    <Title class="m-b-40" color="primary" size="xl">{{title}}</Title>
    <p class="fk-not-found__content m-b-40" v-html="content">
    </p>
    <Button class="fk-not-found__button" :href="link"  size="big" color="secondary" link outline>
      {{button}} <Icon icon="arrow-right" color="secondary"/>
    </Button>
  </Flex>
</template>

<script>
  export default {
    name: 'NotFound',
    props: {
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      button: {
        type: String,
        default: ''
      },
      link: {
        type: String,
        default: '#'
      }
    }
  }
</script>