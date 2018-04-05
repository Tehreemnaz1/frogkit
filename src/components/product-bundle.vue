<style lang="stylus">
  @import '../stylus/mixins/product-bundle'
  
  .fk-product-bundle
    product-bundle-mixin()
</style>

<template>
  <Flex  v-if="show" class="fk-product-bundle">
    <Flex :class="containerClass" align="center" column>
      <Title size="xs" color="primary" class="fk-product-bundle__title" center>{{product.title}}</Title>
      <BundleRecap :bundle="product.bundle" />
      <Flex align="center" :class="featureClass" column>
        <div>
          <TickText bold :color="tickColor" class="fk-product-bundle__feature-item" v-for="feature, index in product.features" :key="index" :placeholder="feature.placeholder">
            <p v-if="feature.description">{{feature.description}}</p>
          </TickText>
        </div>
      </Flex>
      <Flex align="center" class="m-b-10 m-t-10" column>
        <div>
          <TickText v-for="feature, index in product.additional" :key="index" :placeholder="feature" class="fk-product-bundle__feature-item" />
        </div>
      </Flex>
      <Flex align="center" class="fk-product-bundle__info" column>
        <a :href="product.link.href" class="m-b-10">{{product.link.text}}</a>
        <p class="m-b-15">
          <PriceTag v-if="product.price" :value="product.price.amount" :code="product.price.currency" class="fk-product-bundle__price">
            <p slot="prefix" v-html="product.price.prefix"></p>
            <p slot="suffix" v-html="product.price.suffix"></p>
          </PriceTag>
        </p>
        <Button color="secondary" size="big" @click="$emit('click')" block>{{product.action}}</Button>
      </Flex>
    </Flex>
  </Flex>
</template>

<script>
  let updateShowListner
  export default {
    name: 'ProductBundle',
    props: {
      product: {
        type: Object,
        default: () => { return {}}
      },
      hw: {
        type: Boolean,
        default: true
      },
      active: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        show: false
      }
    },
    watch: {
      active() {
        this.updateShow()
      } 
    },
    mounted () {
      updateShowListner = this.updateShow
      this.updateShow()
      window.addEventListener('resize', updateShowListner)
    },
    destroyed () {
      window.removeEventListener('resize', updateShowListner)
    },
    methods: {
      updateShow () {
        this.show = this.active || window.innerWidth > 767
      }
    },
    computed: {
      containerClass() {
        return this.hw ? 'fk-product-bundle__container' : 'fk-product-bundle__container--nhw'
      },
      featureClass() {
        return this.hw ? 'fk-product-bundle__features' : 'fk-product-bundle__features--nhw'
      },
      tickColor() {
        return this.hw ? 'white' : 'orange'
      }
    }
  }
</script>