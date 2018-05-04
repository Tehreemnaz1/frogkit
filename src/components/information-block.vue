<style lang="stylus">
  @import '../stylus/_vars' 
  .fk-information-block
    color #7a7a7a
    font-size 2rem
    @media(max-width $bp-md)
      &__content, &__title
        font-size 1.5rem !important

</style>

<template>
  <section class="fk-information-block">
    <Title v-if="!hide" size="xs" class="fk-information-block__title m-b-10">{{title}}</Title>
    <div class="fk-information-block__content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'InformationBlock',
    props: {
      title: {
        type: String,
        default: ''
      },
      hide: {
        type: Boolean,
        default: false
      }
    }
  }
</script>