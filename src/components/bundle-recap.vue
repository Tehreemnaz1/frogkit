<style lang="stylus">
  @import '../stylus/_vars'
  .fk-bundle-recap
    background-color white
    width 100%
    padding 10px
    &__icon
      width 20px
      height 20px

    &__cadre
      @media(max-width $bp-md)
        width 55px
      &, &--small
        position relative
        max-width 90px
    
    &__cadre--small
      width 90px
      @media(max-width $bp-lg)
        width 75px
      @media(max-width $bp-md)
        width 50px
      @media(max-width $bp-sm - 1)
        width 100% 

    &__item, &__item--small
      max-height 100px
      display: block
      margin: 0 auto
    &__item--small
      @media(min-width $bp-sm)
        max-width 20%        
        max-width 45px
    &__label, &__label--small
      width 100%
      min-width 60px
      font-size: 1.6rem
      text-align: center
    &__label--small
      font-size: 1.4rem

</style>

<template>
  <section class="fk-bundle-recap">
    <Flex align="center" :justify="justify" class="m-b-10">

      <div  v-for="(item, i) in bundleItems" :key="i" >
        <Icon v-if="item.type === 'icon'" icon="plus-bold" color="orange" class="fk-bundle-recap__icon"/>
        <Flex align="center" v-else :class="cadreClass">
          <slot v-if="i === 2" name="sticker"></slot>
          <img  :src="item.image" align="middle" :class="itemClass"/>
        </Flex>
      </div>
    </Flex>

    <Flex align="center" :justify="justify" class="fk-bundle-recap__label-container">
      <div  v-for="(item, i) in bundleItems" :key="i" >
        <p v-if="item.type === 'icon'" class="fk-bundle-recap__icon" ></p>
        <Flex v-else align="center" :class="cadreClass">
          <p :class="labelClass" v-html="item.label"></p>
        </Flex>
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
      cadreClass() {
        return !!this.small || this.bundle.length <= 2 ? 'fk-bundle-recap__cadre--small' : 'fk-bundle-recap__cadre'
      },
      labelClass() {
        return !!this.small ? 'fk-bundle-recap__label--small' : 'fk-bundle-recap__label'
      },
      justify() {
        return this.bundle.length > 2 ? 'space-between' : 'space-evenly'
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