<style lang="stylus">
  @require '../stylus/mixins/app-header'

  .fk-app-header
    app-header-mixin()

</style>

<template>
  <header class="fk-app-header">
    <div class="fk-app-header__container">
      <!-- logo -->
      <h1 class="fk-app-header__logo">
        <a href="#"><img src="../assets/logo-small.svg" /></a>
      </h1>
      <!-- burger menu icon -->
      <span class="fk-app-header__toggle">
        <Icon icon="hamburger-menu" />
      </span>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'AppHeader',
    props: {
    },
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>
