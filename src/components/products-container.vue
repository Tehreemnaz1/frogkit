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
          <b class="fk-products-container__mobile__container__price">{{getMobilePrice(product)}}</b>
          <p class="fk-products-container__mobile__container__suffix m-b-10" v-if="product.price && !product.storage && hw">{{product.price.suffix}}</p>
      </Flex>
    </Flex>
    <Flex justify="center" align="stretch" grow>
      <Col sm4 xs12 v-for="product in products" :key="product.id" class="fk-products-container__product" >
        <StorageBundle v-if="product.storage" :storage="product" :active="active === product.id":selectedDevice="selectedDevice" 
          :selectedUpgrade="selectedUpgrade" @select="handleSelect" @change="handleChange" @upgrade="$emit('upgrade')" :upgrades="upgrades"/>
        <ProductBundle v-else :product="product" :hw="hw" :active="active === product.id" @click="handleClick"/>
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
      selectedUpgrade: {
        type: Object,
        default: () => {{}}
      },
      selectedDevice: {
        type: Object,
        default: () => {{}}
      },
      upgrades: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        active: this.products.length && this.products[0].id
      }
    },
    methods: {
      handleClick(uuid) {
        this.$emit('click', uuid)
      },
      mobileClass(id) {
        return this.active === id ? 'fk-products-container__mobile__container--active' : ''
      },
      handleChange(period) {
        this.$emit('change', period)
      },
      handleSelect(device) {
        this.$emit('select', device)
      },
      getMobilePrice(product) {
        return product.storage ? this.selectedUpgrade.mobilePrice : product.price.mobilePrice
      }
    }
  }
</script>