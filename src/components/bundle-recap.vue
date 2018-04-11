<style lang="stylus">
  @import '../stylus/_vars'
  .fk-bundle-recap
    flex-wrap: nowrap !important
    background-color white
    padding 10px
    & &__icon
      width 20px
      height 20px
    &__item, &__item--small
      width 25%
      position relative
      img
        max-height 100px
        display: block
        margin: 0 auto
    &__item--small
      img
        max-height 45px
    & &__label
      font-size: 1.5rem
      text-align: center
</style>

<template>
  <section class="fk-bundle-recap">
    <Flex align="center" :justify="justify" class="m-b-10">
      <div v-if="bundle[0]" :class="itemClass">
        <img :src="bundle[0].image" align="middle" />
      </div>

      <Icon v-if="bundle[1]" icon="plus-bold" color="orange" class="fk-bundle-recap__icon"/>

      <div v-if="bundle[1]" class="fk-bundle-recap__item">
        <slot name="sticker"></slot>
        <img :src="bundle[1].image" align="middle" />
      </div>

      <Icon v-if="bundle[2]" icon="plus-bold" color="orange" class="fk-bundle-recap__icon"/>

      <div v-if="bundle[2]" :class="itemClass">
        <img :src="bundle[2].image" align="middle" />
      </div>
    </Flex>

    <Flex align="center" :justify="labelJustify">
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
      },
      small: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      itemClass() {
        return !!this.small ? 'fk-bundle-recap__item--small' : 'fk-bundle-recap__item' 
      },
      justify() {
        return !!this.small ? 'space-between' : 'space-evenly'
      },
      labelJustify() {
        return !!this.small ? 'space-between' : 'space-around'
      }
    }
  }
</script>