<style lang="stylus" scoped>
  @require '../stylus/mixins/app-badges'

  .fk-app-btn
    appButtonsMixin()

</style>

<template>
  <a :href="url" class="fk-app-btn" :class="name" target="_blank" rel="noopener">{{ label }}</a>
</template>

<script>
  export default {
    name: 'AppBadge',
    props: {
      url: '',
      name: '',
      label: ''
    }
  }
</script>
