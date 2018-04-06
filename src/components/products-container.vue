<style lang="stylus">
  @import '../stylus/mixins/products-container'
  
  .fk-products-container
    products-container-mixin()
</style>

<template>
  <section>
    <Flex class="fk-products-container">
      <Flex column align="center" v-for="product, index in products" :key="index" @click="active = index" :class="['fk-products-container__container', mobileClass(index)]">
        <p class="m-b-10 fk-products-container__container__title"  v-html="product.titleMobile"></p>
        <b class="fk-products-container__price" v-if="product.price" >{{product.price.mobilePrice}}</b>
        <p class="fk-products-container__suffix m-b-10" v-if="product.price">{{product.price.suffix}}</p>
      </Flex>
    </Flex>
    <Flex justify="space-around" >
      <ProductBundle v-for="product, index in products" :key="index" :product="product" :hw="hw" :active="active === index" />
    </Flex>
  </section>
</template>

<script>
  export default {
    name: 'ProductsContainer',
    props: {
      products: {
        type: Array,
        default: () => []
      },
      hw: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        active: 0
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