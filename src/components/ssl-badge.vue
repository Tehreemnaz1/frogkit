<style lang="stylus">
  @import '../stylus/mixins/ssl-badge'
  .ssl-badge
    ssl-badge()
</style>

<template>
  <Flex align="center" class="ssl-badge">
      <img class="ssl-badge__img" src="../assets/images/ssl.png" />
      <div class="ssl-badge__text">{{text}}</div>
  </Flex>
</template>

<script>
  export default {
    name: 'SslBadge',
    props: {
      text: {
        type: String,
        default: ''  
      }
    }
  }
</script>