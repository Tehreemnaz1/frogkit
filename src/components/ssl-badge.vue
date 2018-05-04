<style lang="stylus">
  @import '../stylus/mixins/ssl-badge'
  .fk-ssl-badge
    ssl-badge()
</style>

<template>
  <Flex align="center" class="fk-ssl-badge">
      <img class="fk-ssl-badge__img" :class="{'fk-ssl-badge__img--small' : !!small}" src="../assets/images/ssl.png" />
      <div class="fk-ssl-badge__text" :class="{'fk-ssl-badge__text--small' : !!small}">{{text}}<slot></slot></div>
  </Flex>
</template>

<script>
  export default {
    name: 'SslBadge',
    props: {
      text: {
        type: String,
        default: ''  
      },
      small: {
        type: Boolean,
        default: false
      }
    }
  }
</script>