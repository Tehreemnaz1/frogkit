<style lang="stylus">
  @import '../stylus/mixins/products-container'
  
  .fk-products-container
    products-container-mixin()
</style>

<template>
  <Flex justify="space-around" class="fk-products-container">
    <Flex column grow align="center" v-for="product, index in products" :key="index" @click="$emit('select', index)" :class="['fk-products-container__container', mobileClass(index)]">
      <p class="m-b-10">{{product.title}}</p>
      <p class="fk-products-container__price">{{product.price.amount}} {{product.price.currency}}</p>
      <p class="fk-products-container__suffix m-b-10">{{product.price.suffix}}</p>
    </Flex>
  </Flex>
</template>

<script>
  export default {
    name: 'ProductsContainer',
    props: {
      products: {
        type: Array,
        default: () => []
      },
      active: {
        type: Number,
        default: 0
      }
    },
    methods: {
      mobileClass(index) {
        return this.active === index ? 'fk-products-container__container--active' : ''
      },
      columnSize() {
        return `xs${12/this.products.length}` 
      }
    }
  }
</script>