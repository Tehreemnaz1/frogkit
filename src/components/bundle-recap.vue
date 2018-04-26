<style lang="stylus">
  @import '../stylus/_vars'
  .fk-bundle-recap
    background-color white
    width 100%
    padding 10px
    & &__icon
      width 20px
      height 20px
    & &__cadre
      width 90px

    & &__item, &__item--small
      max-width 80px
      position relative
      // &img
      max-height 100px
      display: block
      margin: 0 auto
    &__item--small
      max-width 20%
      @media(min-width $bp-sm + 1)
        // &img 
        max-width 45px
    & &__label, &__label--small
      width 100%
      font-size: 1.6rem
      text-align: center
    &__label--small
      font-size: 1.4rem
    &__label-container
      flex-wrap nowrap !important

</style>

<template>
  <section class="fk-bundle-recap">
    <Flex align="center" :justify="justify" class="m-b-10">

      <div  v-for="(item, i) in bundleItems" :key="i" >
        <Icon v-if="item.type === 'icon'" icon="plus-bold" color="orange" class="fk-bundle-recap__icon"/>
        <Flex v-else align="center" class="fk-bundle-recap__cadre">
          <img  :src="item.image" align="middle" :class="itemClass"/>
        </Flex>
      </div>

      <!-- <Icon v-if="bundle[1]" icon="plus-bold" color="orange" class="fk-bundle-recap__icon"/>

      <div v-if="bundle[1]" :class="itemClass" class="fk-bundle-recap__cadre">
        <slot name="sticker"></slot>
        <img :src="bundle[1].image" align="middle" />
      </div>

      <Icon v-if="bundle[2]" icon="plus-bold" color="orange" class="fk-bundle-recap__icon"/>

      <div v-if="bundle[2]" :class="itemClass">
        <img :src="bundle[2].image" align="middle" />
      </div> -->
    </Flex>

    <Flex align="center" :justify="justify" class="fk-bundle-recap__label-container">

      <div  v-for="(item, i) in bundleItems" :key="i" >
        <i v-if="item.type === 'icon'" class="fk-bundle-recap__icon" ></i>
        <Flex v-else align="center" class="fk-bundle-recap__cadre">
          <p :class="labelClass" v-html="item.label"></p>
        </Flex>
      </div>
      <!-- <div v-for="(item, i) in bundle" :key="i" class="fk-bundle-recap__item">
        <p :class="labelClass" v-html="item.label"></p>
      </div> -->
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
      },
      justify() {
        return this.bundle.length > 2 ? 'space-between' : 'space-evenly'
      },
      labelsIterator() {
        return Array.from(Array(this.bundle.length * 2 - 1).keys())
      },
      bundleItems() {
        const icon = {type: 'icon'}
        return this.bundle.reduce((acc, i, k, a ) => {
          if (k < a.length -1) return [...acc, i, icon]
          else return [...acc, i]
        }, [])
      }
    }
  }
</script>