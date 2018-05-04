<style lang="stylus">
  @import '../stylus/mixins/cookie-policy'
  .cookie-policy
    cookie-policy-mixin()
</style>

<template>
  <Flex class="cookie-policy" justify="space-between">
    <p class="cookie-policy__content">{{content[lang]}} <a :href="link">{{linkTitle[lang]}}</a>.</p>
    <div class="cookie-policy__close" @click="$emit('close')" ><Icon color="white" icon="close"  /></div>
  </Flex>
</template>

<script>
export default {
  name: 'CookiePolicy',
  props: {
    link: {
      type: String,
      default: '#'
    },
    lang: {
      type: String,
      default: 'de'
    }
  },
  data () {
    return {
      content: {
        'de': 'Durch die Nutzung dieser Website stimmst du der Verwendung von Cookies zu. Weitere Informationen und Hinweise zur Änderung deiner Cookie-Einstellungen findest du in unseren',
        'en': 'By using this website, you are allowing the usage of cookies. More information about cookies and how to change your cookie settings are listed in our'
      },
      linkTitle: {
        'de': 'Cookie-Richtlinien',
        'en': 'cookies policy'
      }
    }
  }
}
</script>