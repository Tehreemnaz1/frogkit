<style lang="stylus" scoped>
  $badge := {
    background-size: 65px 65px
    height: 65px
    width: 65px
  }
  .iso2
    background: url('../assets/images/iso-27001.jpg') no-repeat
    {$badge}
  .tuev
    background: url('../assets/images/tuev.jpg') no-repeat
    {$badge}
  .iso9
    background: url('../assets/images/iso-9001.jpg') no-repeat
    {$badge}
</style>

<template>
  <BadgeContainer>
    <div class="iso2"></div>
    <div class="tuev"></div>
    <div class="iso9"></div>
  </BadgeContainer>
</template>

<script>
  export default {
    name: 'CertificateBadge'
  }
</script>