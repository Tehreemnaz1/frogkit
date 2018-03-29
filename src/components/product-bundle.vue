<style lang="stylus">
  @import '../stylus/mixins/product-bundle'
  
  .fk-product-bundle
    product-bundle-mixin()
</style>

<template>
  <Flex class="fk-product-bundle">
    <Flex :class="bundleClass" column>
      <Title size="xs" color="primary" class="fk-product-bundle__title" center>{{product.title}}</Title>
      <Flex align="center" justify="center" :class="mobileClass" column @click="$emit('select')">
        <p class="m-b-10">{{product.title}}</p>
        <p class="fk-product-bundle__price">{{product.price.amount}} {{product.price.currency}}</p>
        <p class="fk-product-bundle__suffix m-b-10">{{product.price.suffix}}</p>
      </Flex>
      <BundleRecap v-if="show" :bundle="product.bundle" />
      <Flex v-if="show" align="center" :class="featureClass" column>
        <div>
          <TickText :color="tickColor" v-for="feature, index in product.features" :key="index" :placeholder="feature.placeholder">
            <p v-if="feature.description">{{feature.description}}</p>
          </TickText>
        </div>
      </Flex>
      <Flex v-if="show" align="center" column>
        <div>
          <TickText v-for="feature, index in product.additional" :key="index" :placeholder="feature" />
        </div>
      </Flex>
      <Flex v-if="show" align="center" class="fk-product-bundle__info" column>
        <a :href="product.link.href">{{product.link.text}}</a>
        <p class="m-b-15">
          <PriceTag v-if="product.price" :value="product.price.amount" :code="product.price.currency">
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
    // data () {
    //   return {
    //     show: false
    //   }
    // },
    mounted () {
      // this.updateShow()
      window.addEventListener('resize', this.$forceUpdate)
    },
    methods: {
      // updateShow () {
      //   this.show = this.active || window.innerWidth > 767
      // }
    },
    computed: {
      bundleClass() {
        return this.hw ? 'fk-product-bundle__hw' : 'fk-product-bundle__nhw' 
      },
      featureClass() {
        return this.hw ? 'fk-product-bundle__hw__features' : 'fk-product-bundle__nhw__features'
      },
      tickColor() {
        return this.hw ? 'white' : 'orange'
      },
      mobileClass() {
        return this.active ? 'fk-product-bundle__mobile--active' : 'fk-product-bundle__mobile'
      },
      show() {
        return this.active || window.innerWidth > 767

      }
    }
  }
</script>