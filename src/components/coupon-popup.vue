<style lang="stylus">
  @require '../stylus/mixins/coupon-popup'

  .fk-coupon-popup
    coupon-popup-mixin()
</style>

<template>
  <Dialogue :visible="visible" @change="close">
    <div class="fk-coupon-popup">
      <Title class="fk-coupon-popup__title" color="primary" size="xl">{{ config.title }}</Title>
      <img :src="config.image" class="fk-coupon-popup__img" />
      <p class="fk-coupon-popup__txt">{{ config.headline }}</p>
      <p class="fk-coupon-popup__txt">
        {{ config.label }}
        <span class="fk-coupon-popup__txt__code">{{ config.code }}</span>
      </p>
      <Button class="fk-coupon-popup__btn" size="big" :block="true" color="secondary" @click="proceed" link>
        <span>{{ config.accept }}</span>
        <Icon icon="arrow-right" />
      </Button>
      <span class="fk-coupon-popup__close" @click="close">{{ config.reject }}</span>
    </div>
  </Dialogue>
</template>

<script>
  import Dialogue from './dialogue'

  export default {
    name: 'CouponPopup',
    components: {
      Dialogue,
    },
    model: {
      prop: 'visible',
      event: 'change',
    },
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
      config: {
        type: Object,
        required: true,
        default: () => ({}),
      },
    },
    computed: {
      showDialogue() {
        return this.visible
      },
    },
    methods: {
      close() {
        this.$emit('change', false)
      },
      proceed() {
        this.$emit('proceed', this.config.code)
        this.close()
      },
    },
  }
</script>
