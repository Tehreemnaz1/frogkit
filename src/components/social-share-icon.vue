<style lang="stylus">
  @require '../stylus/mixins/social-icons'

  .fk-social-icon
    social-icon-mixin()

</style>

<template>
  <div>
    <a v-for="network, i in networks" :key="i" :href="shareUrl(network)" class="fk-social-icon" :class="network" target="_blank" rel="noopener"></a>
  </div>
</template>

<script>

  const sharer = {
    facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
    twitter: 'https://twitter.com/home?status=',
    gplus: 'https://plus.google.com/share?url='
  }

  export default {
    name: 'ShareIcons',
    props: {
      url: {
        type: String,
        default: location.href
      }
    },
    data () {
      return {
        networks: Object.keys(this.$attrs).filter(i => sharer[i])
      }
    },
    methods: {
      shareUrl(network){
        return sharer[network] + this.url
      }
    }

  }
</script>
