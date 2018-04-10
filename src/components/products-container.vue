<style lang="stylus">
  @import '../stylus/mixins/products-container'
  
  .fk-products-container
    products-container-mixin()

</style>

<template>
  <Col class="fk-products-container">
    <Flex class="fk-products-container__mobile">
      <Flex column align="center" v-for="product in products" :key="product.id" @click="active = product.id" :class="['fk-products-container__mobile__container', mobileClass(product.id)]" grow>
          <p class="m-b-10 fk-products-container__mobile__container__title"  v-html="product.titleMobile"></p>
          <b class="fk-products-container__mobile__price" v-if="product.price" >{{product.price.mobilePrice}}</b>
          <p class="fk-products-container__mobile__suffix m-b-10" v-if="product.price && !product.storage">{{product.price.suffix}}</p>
      </Flex>
    </Flex>
    <Flex justify="center" align="stretch" grow>
      <Col sm4 xs12 v-for="product in products" :key="product.id" class="fk-products-container__product" >
        <StorageBundle v-if="product.storage" :storage="product" :active="active === product.id":selectedDevice="selectedDevice" :selectedPeriod="selectedPeriod" @select="handleSelect" @change="handleChange" />
        <ProductBundle v-else :product="product" :hw="hw" :active="active === product.id"/>
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
      },
      selectedPeriod: {
        type: Object,
        default: () => {{}}
      },
      selectedDevice: {
        type: Object,
        default: () => {{}}
      }
    },
    data () {
      return {
        active: this.products.length && this.products[0].id
      }
    },
    methods: {
      mobileClass(id) {
        return this.active === id ? 'fk-products-container__mobile__container--active' : ''
      },
      handleChange(period) {
        this.$emit('change', period)
      },
      handleSelect(device) {
        this.$emit('select', device)
      }
    }
  }
</script>