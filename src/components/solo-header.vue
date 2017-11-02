<style lang="stylus" scoped>
  @require '../stylus/mixins/solo-header'

  .solo-header
    soloheader-mixin()

</style>

<template functional>
  <header class="solo-header">
    <div class="solo-header__container">
      <h1>
        <a class="solo-header__container__logo" :href="props.logoUrl"><img src="../assets/logo.svg" /></a>
      </h1>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Soloheader',
    props: {
      logoUrl: {
          type: String,
          default: '/'
      }
    }
  }
</script>
