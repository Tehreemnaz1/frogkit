<style lang="stylus">
  @import '../stylus/_vars'
  .fk-bundle-recap
    background-color white
    width 100%
    padding 10px
    & &__icon
      width 20px
      height 20px
    & &__item, &__item--small
      width 80px
      position relative
      img
        max-height 100px
        display: block
        margin: 0 auto
    &__item--small
      @media(min-width $bp-sm)
        width 25%
        img 
          max-width 45px
    & &__label, &__label--small
      font-size: 1.6rem
      text-align: center
    &__label--small
      font-size: 1.4rem
    &__label-container
      flex-wrap nowrap !important
</style>

<template>
  <section class="fk-bundle-recap">
    <Flex align="center" justify="space-between" class="m-b-10">
      <div v-if="bundle[0]" :class="itemClass">
        <img :src="bundle[0].image" align="middle" />
      </div>

      <Icon v-if="bundle[1]" icon="plus-bold" color="orange" class="fk-bundle-recap__icon"/>

      <div v-if="bundle[1]" :class="itemClass">
        <slot name="sticker"></slot>
        <img :src="bundle[1].image" align="middle" />
      </div>

      <Icon v-if="bundle[2]" icon="plus-bold" color="orange" class="fk-bundle-recap__icon"/>

      <div v-if="bundle[2]" :class="itemClass">
        <img :src="bundle[2].image" align="middle" />
      </div>
    </Flex>

    <Flex align="center" justify="space-between" class="fk-bundle-recap__label-container">
      <div v-for="(item, i) in bundle" :key="i" class="fk-bundle-recap__item">
        <p :class="labelClass" v-html="item.label"></p>
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
      labelClass() {
        return !!this.small ? 'fk-bundle-recap__label--small' : 'fk-bundle-recap__label'
      }
    }
  }
</script>