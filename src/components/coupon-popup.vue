<style lang="stylus">
  @require '../stylus/mixins/coupon-popup'

  .fk-coupon-popup
    coupon-popup-mixin()

</style>

<template>
  <Dialogue :visible="visible" :dark="dark" :requireAction="requireAction">
    <div class="fk-coupon-popup" slot-scope="{ emitHandler, closeHandler }">
      <Title class="fk-coupon-popup__title" color="primary">{{ title }}</Title>
      <img :src="img" class="fk-coupon-popup__img" />
      <p class="fk-coupon-popup__txt">{{ text }}</p>
      <p class="fk-coupon-popup__txt">
        {{ codeText }}
        <span class="fk-coupon-popup__txt__code">{{ code }}</span>
      </p>
      <Button class="fk-coupon-popup__btn" size="big" :block="true" color="secondary" @click="emitHandler('usePromo', code)" link>
        <span>{{ btnText }}</span>
        <Icon icon="arrow-right" />
      </Button>
      <span class="fk-coupon-popup__close" @click="closeHandler">{{ noText }}</span>
    </div>
  </Dialogue>
</template>

<script>
  export default {
    name: 'CouponPopup',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      dark: {
        type: Boolean,
        default: false
      },
      requireAction: {
        type: Boolean,
        default: false
      },
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
    }
  }
</script>
