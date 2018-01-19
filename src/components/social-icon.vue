<style lang="stylus" scoped>
  @require '../stylus/mixins/social-icons'

  .fk-social-icon
    social-icon-mixin()

</style>

<template>
  <a :href="url" class="fk-social-icon" :class="name" target="_blank" rel="noopener">{{ label }}</a>
</template>

<script>
  export default {
    name: 'SocialIcon',
    props: {
      url: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: ''
      }
    }
  }
</script>
