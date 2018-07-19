<style lang="stylus">
  @require '../stylus/mixins/coupon-popup'

  .fk-coupon-popup
    coupon-popup-mixin()

</style>

<template>
<section class="fk-coupon-popup">
  <Title class="fk-coupon-popup__title" color="primary">{{ title }}</Title>
  <img :src="img" class="fk-coupon-popup__img" />
  <p class="fk-coupon-popup__txt">{{ text }}</p>
  <p class="fk-coupon-popup__txt">
    {{ codeText }}
    <span class="fk-coupon-popup__txt__code">{{ code }}</span>
  </p>
  <Button class="fk-coupon-popup__btn" size="big" :block="true" color="secondary" @click="usePromo" link>
    <span>{{ btnText }}</span>
    <Icon icon="arrow-right" />
    </Button>
  <span class="fk-coupon-popup__close" @click="noPromo">{{ noText }}</span>
</section>
</template>

<script>
  export default {
    name: 'CouponPopup',
    props: {
      lang: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      code: {
        type: String,
        default: ''
      },
      codeText: {
        type: String,
        default: ''
      },
      btnText: {
        type: String,
        default: ''
      },
      noText: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        img: require(`../assets/popup/one-month-free-${this.lang}.svg`)
      }
    },
    methods: {
      usePromo() {
        this.$emit('usePromo', this.code)
      },
      noPromo() {
        this.$emit('noPromo')
      }
    }
  }
</script>
