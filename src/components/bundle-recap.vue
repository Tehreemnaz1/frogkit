<style lang="stylus">
  @import '../stylus/mixins/bundle-recap'
  .fk-bundle-recap
    bundle-recap-mixin()

</style>

<template>
  <section class="fk-bundle-recap">
    <Flex align="center" :justify="justify" class="m-b-10">

      <div  v-for="(item, i) in bundleItems" :key="i" >
        <Icon v-if="item.type === 'icon'" icon="plus-bold" color="orange" class="fk-bundle-recap__icon"/>
        <Flex align="center" v-else :class="['fk-bundle-recap__cadre', cadreClass]">
          <slot v-if="i === 2" name="sticker"></slot>
          <img  :src="item.image" align="middle" :class="['fk-bundle-recap__item', itemClass]"/>
        </Flex>
      </div>
    </Flex>

    <Flex align="center" :justify="justify" class="fk-bundle-recap__label-container">
      <div  v-for="(item, i) in bundleItems" :key="i" >
        <p v-if="item.type === 'icon'" class="fk-bundle-recap__icon" ></p>
        <Flex v-else align="center" :class="['fk-bundle-recap__cadre', cadreClass]">
          <p :class="['fk-bundle-recap__label', labelClass]" v-html="item.label"></p>
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
        return !!this.small ? 'fk-bundle-recap__item--small' : ''
      },
      cadreClass() {
        return !!this.small || this.bundle.length <= 2 ? 'fk-bundle-recap__cadre--small' : ''
      },
      labelClass() {
        return !!this.small ? 'fk-bundle-recap__label--small' : ''
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