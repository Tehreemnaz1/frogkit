<style lang="stylus">
  @import '../stylus/_vars'
  .fk-bundle-recap
    flex-wrap: nowrap !important
    background-color white
    padding 10px
    & &__icon
      width 20px
      height 20px
    & &__item
      width 20%
      position relative
      img
        max-height 100px
        display: block
        margin: 0 auto
    & &__label
      font-size: 1.6rem
      text-align: center
</style>

<template>
  <section class="fk-bundle-recap">
    <Flex align="center" justify="space-between" class="m-b-10">
      <div v-if="bundle[0]" class="fk-bundle-recap__item">
        <img :src="bundle[0].image" align="middle" />
      </div>

      <Icon v-if="bundle[1]" icon="plus-bold" color="orange" class="fk-bundle-recap__icon"/>

      <div v-if="bundle[1]" class="fk-bundle-recap__item">
        <slot name="sticker"></slot>
        <img :src="bundle[1].image" align="middle" />
      </div>

      <Icon v-if="bundle[2]" icon="plus-bold" color="orange" class="fk-bundle-recap__icon"/>

      <div v-if="bundle[2]" class="fk-bundle-recap__item">
        <img :src="bundle[2].image" align="middle" />
      </div>
    </Flex>

    <Flex align="center" justify="space-between">
      <div v-for="(item, i) in bundle" :key="i" class="fk-bundle-recap__item">
        <p class="fk-bundle-recap__label" v-html="item.label"></p>
      </div>
    </Flex>
  </section>
</template>

<script>
  export default {
    name: 'BundleRecap',
    props: {
      bundle:{
        type: Array,
        required: true
      }
    }
  }
</script>