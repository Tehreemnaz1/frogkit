<style lang="stylus">
  @import '../stylus/mixins/products-container'
  
  .fk-products-container
    products-container-mixin()
</style>

<template>
  <Col>
    <Flex class="fk-products-container">
      <Flex column align="center" v-for="product in products" :key="product.id" @click="active = product.id" :class="['fk-products-container__container', mobileClass(product.id)]">
        <p class="m-b-10 fk-products-container__container__title"  v-html="product.titleMobile"></p>
        <b class="fk-products-container__price" v-if="product.price" >{{product.price.mobilePrice}}</b>
        <p class="fk-products-container__suffix m-b-10" v-if="product.price">{{product.price.suffix}}</p>
      </Flex>
    </Flex>
    <Flex justify="center"  grow>
      <Col sm4 xs12 v-for="product in products" :key="product.id">
        <ProductBundle :product="product" :hw="hw" :active="active === product.id" class="m-b-40"/>
      </Col>
    </Flex>
  </Col>
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
        active: this.products.length && this.products[0].id
      }
    },
    methods: {
      mobileClass(id) {
        return this.active === id ? 'fk-products-container__container--active' : ''
      },
      columnSize() {
        return `xs${12/this.products.length}` 
      }
    }
  }
</script>