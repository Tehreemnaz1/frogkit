<style lang="stylus">
  @require '../stylus/mixins/coupon-popup'

  .fk-coupon-popup
    coupon-popup-mixin()

</style>

<template>
  <Dialogue :visible="visible" @change="value => $emit('change', value)">
    <div class="fk-coupon-popup">
      <Title class="fk-coupon-popup__title" color="primary">{{ title }}</Title>
      <img :src="img" class="fk-coupon-popup__img" />
      <p class="fk-coupon-popup__txt">{{ text }}</p>
      <p class="fk-coupon-popup__txt">
        {{ codeText }}
        <span class="fk-coupon-popup__txt__code">{{ code }}</span>
      </p>
      <Button class="fk-coupon-popup__btn" size="big" :block="true" color="secondary" @click="$emit('usePromo', code)" link>
        <span>{{ btnText }}</span>
        <Icon icon="arrow-right" />
      </Button>
      <span class="fk-coupon-popup__close" @click="$emit('change', false)">{{ noText }}</span>
    </div>
  </Dialogue>
</template>

<script>
  export default {
    name: 'CouponPopup',
    model: {
      prop: 'visible',
      event: 'change'
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      lang: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      code: {
        type: String,
        required: true
      },
      codeText: {
        type: String,
        required: true
      },
      btnText: {
        type: String,
        required: true
      },
      noText: {
        type: String,
        required: true
      }
    },
    computed: {
      showDialogue() {
        return this.visible
      }
    },
    data() {
      return {
        img: require(`../assets/popup/one-month-free-${this.lang}.svg`)
      }
    }
  }
</script>
