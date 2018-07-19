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
      {{ codeText }}
      <span class="fk-popup__txt__code">{{ code }}</span>
    </p>
    <Button class="fk-popup__btn" size="big" :block="true" color="secondary" @click="usePromo" link>
    <span>{{ btnText }}</span>
    <Icon icon="arrow-right" />
    </Button>
    <span class="fk-popup__close" @click="noPromo">{{ noText }}</span>
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
      codeText:  {
        type: String,
        default: ''
      },
      btnText:  {
        type: String,
        default: ''
      },
      noText:  {
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
