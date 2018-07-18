<style lang="stylus">
  @require '../stylus/mixins/popup'

  .fk-popup
    popup-mixin()

</style>

<template>
  <section class="fk-popup">
    <Title class="fk-popup__title" color="primary">{{ title }}</Title>
    <img :src="img" class="fk-popup__img" />
    <p class="fk-popup__txt">{{ text }}</p>
    <p class="fk-popup__txt">
      {{ codeLabel }}
      <span class="fk-popup__txt__code">{{ code }}</span>
    </p>
    <Button class="fk-popup__btn" size="big" :block="true" color="secondary" @click="useVoucher" link>
    <span>{{ btnLabel }}</span>
    <Icon icon="arrow-right" />
    </Button>
    <span class="fk-popup__close" @click="noVoucher">{{ noVoucherLabel }}</span>
  </section>
</template>

<script>
  export default {
    name: 'Popup',
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
      code:  {
        type: String,
        default: ''
      },
      codeLabel:  {
        type: String,
        default: ''
      },
      btnLabel:  {
        type: String,
        default: ''
      },
      noVoucherLabel:  {
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
      useVoucher() {
        this.$emit('useVoucher', this.code)
      },
      noVoucher() {
        this.$emit('noVoucher')
      }
    }
  }
</script>
