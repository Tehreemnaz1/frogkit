<style lang="stylus">
  $text-color := #414141
  $link-color := #2f82c4
  .fk-foot-note
    font-size: 14px
    color: $text-color
    a
      color: $link-color
      cursor pointer
      text-decoration none
</style>

<template>
  <section class="fk-foot-note">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'FootNote',
  }
</script>