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
    <Flex justify="center" align="stretch" >
      <template v-for="product, index in products">
        <Col sm4 xs12 v-if="index === storageIndex && storage.devices.length" class="fk-products-container__product" >
          <StorageBundle :storage="storage" :active="active === storage.id" :selectedDevice="selectedDevice"
            :selectedUpgrade="selectedUpgrade" @select="handleSelect" @change="handleChange" @upgrade="$emit('upgrade')"/>
        </Col>
        <Col sm4 xs12 class="fk-products-container__product" >
          <ProductBundle :product="product" :hw="hw" :active="active === product.id" @click="handleClick"/>
        </Col>
      </template>
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
      storage: {
        type: Object,
        default: () => { return {}}
      }
    },
    data () {
      return {
        active: this.products.length && this.products[0].id
      }
    },
    computed:{
      storageIndex () {
        return this.products ? this.products.length / 2 : 0
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