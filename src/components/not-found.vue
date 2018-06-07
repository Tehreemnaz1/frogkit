<style lang="stylus">
  .fk-not-found
    background-color #fff
    height 500px
    width 800px
    border-radius 8px
    & &__exclamation
      width 95px
      height @width
    & &__content
      font-size 2.2rem
      color: #444
      text-align: center
    & &__button
      width 300px
</style>

<template>
  <Flex class="fk-not-found" align="center" justify="center" column>
    <Icon class="fk-not-found__exclamation m-b-30" icon="exclamation-circle" color="orange" />
    <Title class="m-b-40" color="primary" size="xl">{{title[lang]}}</Title>
    <p class="fk-not-found__content m-b-40">
      <template  v-for="text, i in content[lang]">
        {{text}} <br v-if="i < content[lang].length" />
      </template>
    </p>
    <Button class="fk-not-found__button" :href="link"  size="big" color="secondary" link outline>
      {{button[lang]}} <Icon icon="arrow-right" color="secondary"/>
    </Button>
  </Flex>
</template>

<script>
  export default {
    name: 'NotFound',
    props: {
      lang: {
        type: String,
        default: 'de',
        validator: function (val) {
          return ['de', 'en'].includes(val)
        }
      },
      link: {
        type: String,
        default: '#'
      }
    },
    data () {
      return {
        title: {de: 'Ein Fehler ist aufgetreten', en: 'An error has occured'},
        content: {
          de: ['Es tut uns leid, wir konnten die angeforderte Seite nicht finden.', ' Bitte die Internetadresse (URL) auf Fehler überprüfen.'], 
          en: ['We\'re sorry, we couldn\'t find the page you requested.', ' Please check the internet address (URL) for errors.']
        },
        button: {de: 'Zur Startseite', en: 'Go to homepage'}
      }
    }
  }
</script>